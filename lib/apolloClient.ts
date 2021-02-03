import { useMemo } from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  operationName,
} from "@apollo/client";
import { concatPagination } from "@apollo/client/utilities";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";
import { env } from "process";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<any>;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    // creating an HttpLink to connect ApolloClient with the GraphQL server
    link: new HttpLink({
      uri: "https://api.yelp.com/v3/graphql", // Server URL, now I'll be using Yelp
      headers: {
        Authorization: `Bearer ${env.YELP_API_KEY}`,
        "Content-Type": "application/json",
        "Accept-Language": "en-US",
      },
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),
  });
};

const getData = (
  initialState: any,
  existingCache: any
): NormalizedCacheObject => {
  return merge(initialState, existingCache, {
    arrayMerge: (destinationArray: any[], sourceArray: any[]) => [
      ...sourceArray,
      ...destinationArray.filter((d: any) =>
        sourceArray.every((s: any) => !isEqual(d, s))
      ),
    ],
  });
};

export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    const data = getData(initialState, existingCache);

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
};

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}

import { useMemo } from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { concatPagination } from "@apollo/client/utilities";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

const token =
  "VFcT6l2zbbI6oAlyuQjembQgHttjgRnLXElDEFgw7mM8-WudbWehlF1HAB5AUOeqepTiDNJ9qvw2wGbvskVtx8eQRCfzMNB6P0GtvSIBj00sUGuHcpZ25y1fHzEXYHYx";

let apolloClient: ApolloClient<any>;

/**
 * GraphQL Caching configuration
 */
const memoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        allPosts: concatPagination(),
      },
    },
  },
});

const createApolloClient = () => {
  // return new ApolloClient({
  //   cache: memoryCache,
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     "Access-Control-Allow-Origin": "*",
  //     // 'Content-Type': 'application/graphql'
  //     "Content-Type": "application/json",
  //     "Accept-Language": "en-US",
  //     "X-Requested-With": "XMLHttpRequest",
  //   },
  //   // https://cors-anywhere.herokuapp.com/
  //   uri: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql",
  // });

  return new ApolloClient({
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${token}`,
    },
    uri: "https://api.yelp.com/v3/graphql",
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

export function addApolloState(client: any, pageProps: any) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}

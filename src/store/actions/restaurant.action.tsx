import { GraphQLClient, request } from "graphql-request";
import { GET_RESTAURANTS } from "@data/getRestaurants";
import * as TYPE from "@store/constants";

const gqlClient = new GraphQLClient("http://localhost:4000/", {
  method: "POST",
});

export const searchRestaurants = () => async (dispatch: any, getState: any) => {
  const { term, location, limit = 10, reviews = 10 } = getState().search;

  const variables = {
    term,
    location: location.name,
    limit,
    reviews,
  };

  try {
    const data = await request(
      "http://localhost:4000/",
      GET_RESTAURANTS,
      variables
    );

    console.log(JSON.stringify(data, undefined, 2));

    dispatch({
      type: TYPE.SEARCH_RESULT,
      payload: data.search,
    });
  } catch (error) {
    console.error(error);
  }
};

export const setSearch = (term: string, location: string) => async (
  dispatch: any,
  getState: any
) => {
  dispatch({
    type: TYPE.SET_SEARCH,
    payload: {
      term,
      location,
    },
  });
};

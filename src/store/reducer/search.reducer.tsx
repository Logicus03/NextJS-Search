import * as TYPES from "@store/constants";

const initialState = {
  term: "",
  location: {},
  result: {},
  isLoading: true,
};

export default function searchReducer(state = initialState, action: any) {
  switch (action.type) {
    case TYPES.SEARCH_RESULT:
      return {
        ...state,
        result: action.payload,
        isLoading: false,
      };

    case TYPES.SET_SEARCH:
      // const { term, location } = action.payload;
      return {
        // ...initialState,
        ...state,
        ...action.payload,
        isLoading: true,
      };

    default:
      return state;
  }
}

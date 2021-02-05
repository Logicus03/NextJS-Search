import { useMemo } from "react";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import { env } from "process";

let store: any;
let reducers: any;

const initialState = {};
let middleware: any[] = [thunk];

if (env.NODE_ENV === "development") {
  middleware = [...middleware, createLogger()];
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}

export const initializeStore = (preloadedState: {}) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: any, _reducers?: any) {
  reducers = _reducers || null;

  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

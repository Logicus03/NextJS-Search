import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";

const initStore = (initialState: {}, options: any) => {
  //Setup Redux Debuger
  const composeEnhancers =
    (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) ||
    compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

export default initStore;

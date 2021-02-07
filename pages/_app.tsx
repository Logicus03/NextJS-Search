import { Provider } from "react-redux";

import { useStore } from "@lib/redux";
import reducers from "@store/reducer";
import "@styles/globals.scss";

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState, reducers);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;

import { Provider as ReduxProvider } from "react-redux";

import { useStore } from "@lib/redux";
import reducers from "@store/reducer";
import "@styles/globals.scss";

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState, reducers);

  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default App;

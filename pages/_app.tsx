import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";

import { useApollo } from "@lib/apolloClient";
import { useStore } from "@lib/redux";
import reducers from "@store/reducer";
import "@styles/globals.scss";

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState, reducers);
  const apolloClient = useApollo(pageProps);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

export default App;

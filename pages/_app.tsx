import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";

import { useApollo } from "../lib/apolloClient";
import { useStore } from "../lib/redux";
import reducers from "../store/reducer";
// import reducers from '@store'
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState, reducers);
  const apolloClient = useApollo(pageProps);

  console.log(process.env.server_uri);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

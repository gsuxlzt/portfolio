import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react";
import client from "../lib/apolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}
export default MyApp;

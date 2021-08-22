import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, CSSReset, extendTheme, Box } from "@chakra-ui/react";
import "@fontsource/raleway/700.css";
import "@fontsource/inter/400.css";

import client from "../lib/apolloClient";

const theme = extendTheme({
  fonts: {
    heading: "Raleway, sans-serif",
    body: "Inter, sans-serif",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Box bg="whitesmoke" minH="100vh">
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </ApolloProvider>
  );
}
export default MyApp;

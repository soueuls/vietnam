import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "@/theme";

import { Header, Footer } from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

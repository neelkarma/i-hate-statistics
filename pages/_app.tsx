import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import "../styles/global.css";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ChakraProvider>
  );
}
export default App;

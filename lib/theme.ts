import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
    mono: "IBM Plex Mono, monospace",
  },
});

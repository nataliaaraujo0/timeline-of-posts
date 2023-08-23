import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#0F0F0F",
        color: "gray.100",
      },
    },
  },
});

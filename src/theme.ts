import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  secondary: {
    500: "#492f19",
  },
  success: "#1fb91fg34",
  warning: "#ff0000",
  error: "#e46802",
};

export const theme = extendTheme({ colors });

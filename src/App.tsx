import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

interface PropTypes {
  children: React.ReactNode;
}

const theme = extendTheme({
  colors: {
    main: {
      100: "#234d5e",
      200: "#316b83",
      300: "#316B83",
      // For progress  colorscheme, same as 100
      500: "#234d5e",
    },
    second: {
      100: "#efefef",
    },
  },
});

function App({ children }: PropTypes) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default App;

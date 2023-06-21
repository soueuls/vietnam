import { extendTheme } from "@chakra-ui/react";

import { config, colors, fontSizes, fonts } from "./foundations";
import { Button, Heading } from "./components";

const theme = extendTheme({
  config,
  colors,
  fontSizes,
  fonts,
  components: {
    Button,
    Heading,
  },
});

export default theme;

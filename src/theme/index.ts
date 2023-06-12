import { extendTheme } from "@chakra-ui/react";

import { config, colors, fontSizes, fonts } from "./foundations";
import { Heading } from "./components";

const theme = extendTheme({
  config,
  colors,
  fontSizes,
  fonts,
  components: {
    Heading,
  },
});

export default theme;

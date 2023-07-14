import { extendTheme } from "@chakra-ui/react";

import { config, colors, fontSizes, fonts } from "./foundations";
import { Accordion, Button, Heading } from "./components";

const theme = extendTheme({
  config,
  colors,
  fontSizes,
  fonts,
  components: {
    Accordion,
    Button,
    Heading,
  },
});

export default theme;

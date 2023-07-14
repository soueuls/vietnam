import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  container: {
    overflow: "hidden",
    borderTopWidth: "0",
    _last: {
      borderBottomWidth: "0",
    },
  },
  button: {
    py: "4",
    bg: "secondary.3",
    color: "white",
    fontSize: "lg",
    fontWeight: "medium",
    _hover: {
      bg: "auto",
    },
  },
});

export const Accordion = defineMultiStyleConfig({
  baseStyle,
});

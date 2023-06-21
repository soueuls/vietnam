import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  fontWeight: "bold",
});

const sizes = {
  lg: defineStyle({
    py: "6",
    px: "6",
    fontSize: "xl",
  }),
};

export const Button = defineStyleConfig({
  baseStyle,
  sizes,
});

import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  fontWeight: "bold",
  transition: "0.5s all",
});

const variantPrimary = defineStyle({
  _hover: {
    transform: "scale(1.05)",
    shadow: "xl",
    bg: "auto",
  },
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
  variants: {
    primary: variantPrimary,
  },
  defaultProps: {
    variant: "primary",
  },
});

import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const sizes = {
  "6xl": defineStyle({
    fontSize: ["8xl", null, "9xl"],
  }),
  "5xl": defineStyle({
    fontSize: ["7xl", null, "8xl"],
  }),
};

export const Heading = defineStyleConfig({
  sizes,
});

import NextLink from "next/link";
import { Heading, Link } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Link as={NextLink} href="/" _hover={{ textDecor: "none" }}>
      <Heading as="h1" size="lg">
        Logo
      </Heading>
    </Link>
  );
};

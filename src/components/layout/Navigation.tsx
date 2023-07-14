import NextLink from "next/link";
import { chakra, HStack, Link } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <chakra.nav fontSize="xl" fontWeight="medium" color="white">
      <HStack spacing="10">
        <Link as={NextLink} href="/#why-us" scroll={false}>
          Why choose us?
        </Link>
        <Link as={NextLink} href="/#guides" scroll={false}>
          Our guides
        </Link>
        <Link as={NextLink} href="/#tours" scroll={false}>
          Our tours
        </Link>
        <Link as={NextLink} href="/#faq" scroll={false}>
          FAQ
        </Link>
      </HStack>
    </chakra.nav>
  );
};

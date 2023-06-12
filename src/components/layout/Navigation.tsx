import { chakra, HStack, Link } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <chakra.nav fontSize="xl" fontWeight="medium">
      <HStack spacing="10">
        <Link>Why choose us?</Link>
        <Link>Our tours</Link>
        <Link>Contact</Link>
        <Link>FAQ</Link>
      </HStack>
    </chakra.nav>
  );
};

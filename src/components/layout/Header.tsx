import { chakra, Flex, HStack } from "@chakra-ui/react";

import { WhatsappButton } from "@/components";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <chakra.header
      zIndex="banner"
      position="absolute"
      top="0"
      w="full"
      px="12"
      py="6"
    >
      <Flex justify="space-between" align="center">
        <Logo />
        <HStack spacing="12">
          <Navigation />
          <WhatsappButton />
        </HStack>
      </Flex>
    </chakra.header>
  );
};

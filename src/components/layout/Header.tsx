import { chakra, Flex, Show, HStack } from "@chakra-ui/react";

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
      px={{ base: "6", md: "12" }}
      py="6"
    >
      <Flex justify="space-between" align="center">
        <Logo />
        <Show above="md">
          <HStack spacing="12">
            <Navigation />
            <WhatsappButton>Book a tour</WhatsappButton>
          </HStack>
        </Show>
        <Show below="md">
          <WhatsappButton>Book a tour</WhatsappButton>
        </Show>
      </Flex>
    </chakra.header>
  );
};

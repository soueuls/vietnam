import { chakra, Container, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <chakra.footer py={{ base: "4", md: "6" }}>
      <Container>
        <Text
          textAlign="center"
          fontSize={{ base: "sm", md: "md" }}
          color="gray.700"
        >
          Made with ❤️ by Swann for my dear friend Joshua.
        </Text>
      </Container>
    </chakra.footer>
  );
};

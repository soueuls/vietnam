import { chakra, Container, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <chakra.footer py="6">
      <Container>
        <Text textAlign="center">
          Made with ❤️ by Swann for my dear friend Joshua
        </Text>
      </Container>
    </chakra.footer>
  );
};

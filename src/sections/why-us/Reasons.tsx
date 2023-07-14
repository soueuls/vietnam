import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export const Reasons = () => {
  return (
    <Box bg="secondary.1" py={{ base: "12", md: "24" }}>
      <Container maxW="prose" textAlign="center">
        <Stack spacing="4">
          <Heading size={{ base: "4xl", sm: "3xl" }}>
            3 good reasons to choose us
          </Heading>
          <Text fontSize="2xl">
            If you take the time to shop around, you will quickly notice we do
            things a little bit differently.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

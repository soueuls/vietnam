import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export const Reasons = () => {
  return (
    <Box bg="secondary.1" py="24">
      <Container maxW="prose" textAlign="center">
        <Stack spacing="2">
          <Heading size="3xl">3 good reasons to choose us</Heading>
          <Text fontSize="2xl">
            If you take the time to shop around, you will quickly notice we do
            things a little bit differently.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

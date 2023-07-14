import { chakra, Container, Stack, Heading } from "@chakra-ui/react";

import { ToursList } from "./ToursList";

export const Tours = () => {
  return (
    <chakra.section id="tours" pb={{ base: "12", md: "24" }}>
      <Container maxW="container.xl">
        <Stack spacing={{ base: "8", md: "24" }}>
          <Container maxW="container.md">
            <Heading size="3xl" textAlign="center">
              What do you want to explore?
            </Heading>
          </Container>
          <ToursList />
        </Stack>
      </Container>
    </chakra.section>
  );
};

import { chakra, Container, Heading, Stack } from "@chakra-ui/react";
import { GuidesList } from "./GuidesList";

export const Guides = () => {
  return (
    <chakra.section id="guides" py={{ base: "12", md: "24" }}>
      <Container maxW="container.xl">
        <Stack spacing={{ base: "12", md: "24" }}>
          <Container maxW="container.md">
            <Heading size="3xl" textAlign="center">
              Our guides are part of the experience
            </Heading>
          </Container>
          <GuidesList />
        </Stack>
      </Container>
    </chakra.section>
  );
};

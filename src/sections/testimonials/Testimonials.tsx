import { Box, chakra, Container, Heading, Stack, Text } from "@chakra-ui/react";

import { Grid } from "./Grid";

export const Testimonials = () => {
  return (
    <chakra.section py="24">
      <Container maxW="container.xl">
        <Stack
          spacing="6"
          direction={{ base: "column", xl: "row" }}
          align="center"
        >
          <Container>
            <Stack spacing="6">
              <Heading size="3xl">They trusted us</Heading>
              <Stack spacing="4" fontSize="xl">
                <Text>
                  Far from the usual big and heartless tour agencies, we are a
                  small local business providing warm services and a lot of
                  flexibility.
                </Text>
                <Text>
                  You want to stop somewhere or have the freedom to take an
                  unplanned route? <b>We can handle that.</b>
                </Text>
                <Text>
                  Tired of taking boring pictures you will never look at again?{" "}
                  <b>
                    We can bring someone to silently shoot videos, do nice
                    editing and deliver a vlog to you.
                  </b>
                </Text>
                <Text>
                  Our guides have shown the hidden gems of Saigon to more than
                  250 curious explorers. Hold tight on your scooter or sit back
                  and relax in your car and let us tell you the story of Ho Chi
                  Minh, <b>the city that never sleeps.</b>
                </Text>
              </Stack>
            </Stack>
          </Container>
          <Box w="full">
            <Grid />
          </Box>
        </Stack>
      </Container>
    </chakra.section>
  );
};

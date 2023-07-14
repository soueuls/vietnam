import { chakra, Container, Heading, Stack } from "@chakra-ui/react";

import { WhatsappButton } from "@/components";
import { Tour } from "@/sections/tours";

import { PricingBreakdown } from "./PricingBreakdown";
import { Arguments } from "./Arguments";
import { Prices } from "./Prices";
import { PlaneIcon } from "@/components/icons";

type Props = {
  tour: Tour;
};
export const Pricing = ({ tour }: Props) => {
  return (
    <chakra.section py={{ base: "12", md: "24" }}>
      <Stack spacing={{ base: "12", md: "16" }}>
        <Container maxW="container.lg">
          <Heading size="3xl" textAlign="center">
            Time to talk about the price and a few{" "}
            <chakra.span color="secondary.3">extras things</chakra.span>
          </Heading>
        </Container>
        <Container maxW="container.xl">
          <Stack
            direction={{ base: "column-reverse", md: "row" }}
            spacing={{ base: "12", sm: "20", lg: "32" }}
            align={{ base: "center", md: "stretch" }}
          >
            <PricingBreakdown tour={tour} />
            <Stack spacing="6" align={{ base: "center", md: "start" }}>
              <Arguments />
              <Prices tour={tour} />
              <WhatsappButton
                w="60%"
                py="8"
                size="lg"
                rightIcon={<PlaneIcon boxSize="8" />}
              >
                Book this tour!
              </WhatsappButton>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </chakra.section>
  );
};

import { Box, chakra, Container, Stack, Image, Show } from "@chakra-ui/react";

import type { Tour } from "@/sections/tours";

import { Gallery } from "./Gallery";
import { Itinerary } from "./Itinerary";

type Props = {
  tour: Tour;
};

export const Map = ({ tour }: Props) => {
  return (
    <chakra.section
      as={Stack}
      direction={{ base: "column-reverse", lg: "row" }}
      align={{ base: "center", lg: "start" }}
    >
      <Box mt={{ base: "-4", lg: "0" }} position="relative">
        <Show above="lg">
          <Box
            position={{ base: "static", lg: "absolute" }}
            bottom="0"
            left={{ base: "24", xl: "48" }}
            w={{ base: "80%", lg: "sm", xl: "lg" }}
            shadow={{ base: "md", lg: "xl" }}
          >
            <Gallery images={tour.images.gallery} />
          </Box>
        </Show>
        <Image src="/images/map.png" alt="Map" objectFit="cover" />
      </Box>
      <Container mt={{ base: "12", md: "24" }}>
        <Itinerary tour={tour} />
      </Container>
    </chakra.section>
  );
};

import { SimpleGrid } from "@chakra-ui/react";

import { TOURS } from "./fixtures";
import { TourCard } from "./TourCard";

export const ToursList = () => {
  return (
    <SimpleGrid minChildWidth="80" gap={{ base: "4", md: "8" }}>
      {TOURS.map((tour) => (
        <TourCard key={tour.name} {...tour} />
      ))}
    </SimpleGrid>
  );
};

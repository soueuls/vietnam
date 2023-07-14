import { chakra, Stack, Text } from "@chakra-ui/react";

import { Tour } from "@/sections/tours";

type Props = {
  tour: Tour;
};

export const Prices = ({ tour }: Props) => {
  const { prices } = tour;

  return (
    <Stack>
      <Text fontSize="2xl" fontWeight="semibold">
        ${prices.adults} <chakra.small>/ person (12+ years old)</chakra.small>
      </Text>
      <Text fontSize="2xl" fontWeight="semibold">
        ${prices.kids} <chakra.small>/ child</chakra.small>
      </Text>
      <chakra.small fontSize="md" fontStyle="italic" color="gray.800">
        free of charge for kids below 5 years old
      </chakra.small>
    </Stack>
  );
};

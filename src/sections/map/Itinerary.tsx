import {
  Box,
  Center,
  Circle,
  Stack,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";

import type { Tour } from "@/sections/tours";

type Props = {
  tour: Tour;
};

export const Itinerary = ({ tour }: Props) => {
  const { texts } = tour;

  return (
    <Stack spacing="8">
      <Heading size="4xl" textAlign={{ base: "center", md: "left" }}>
        Itinerary
      </Heading>
      <Box position="relative">
        <Center>
          <Box
            position="absolute"
            top="0"
            h="full"
            borderLeftWidth="2.5px"
            borderLeftStyle="dashed"
            borderLeftColor="secondary.3"
          />
        </Center>
        <Stack position="relative" spacing={{ base: "8", md: "12" }}>
          {texts.itinerary.map((text, index) => (
            <HStack
              key={index}
              px="4"
              py={{ base: "2", md: "4" }}
              bg="secondary.2"
              rounded={{ base: "md", md: "lg" }}
              shadow={{ base: "lg", md: "xl" }}
              spacing={{ base: "3", md: "4" }}
            >
              <Circle size="8" bg="white" color="secondary.3">
                <Text fontSize="2xl" fontWeight="bold">
                  {index + 1}
                </Text>
              </Circle>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="white"
                fontWeight="medium"
              >
                {text}
              </Text>
            </HStack>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

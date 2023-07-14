import {
  chakra,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Image,
} from "@chakra-ui/react";
import type { Tour } from "@/sections/tours";

import { WhatsappButton } from "@/components";
import { PlaneIcon } from "@/components/icons";

type Props = {
  tour: Tour;
};

export const TourHero = ({ tour }: Props) => {
  return (
    <chakra.section
      as={Flex}
      py="24"
      px={{ base: "6", sm: "16", md: "24", lg: "40" }}
      minH="100vh"
      align="center"
      bg={`linear-gradient(to right, #000 30%, rgba(122, 212, 232, 0.15)), url(${tour.images.hero})`}
      bgSize="cover"
    >
      <Stack maxW="prose" spacing="8" align="flex-start" color="white">
        <Heading size={{ base: "3xl", md: "4xl" }}>
          {tour.texts.hero.title}
        </Heading>
        <Stack spacing="4">
          {tour.texts.hero.paragraphs.map((text, index) => (
            <Text key={index} fontSize={{ base: "xl", md: "2xl" }}>
              {text}
            </Text>
          ))}
        </Stack>
        <WhatsappButton size="lg" rightIcon={<PlaneIcon boxSize="8" />}>
          Book this tour!
        </WhatsappButton>
      </Stack>
    </chakra.section>
  );
};

import {
  Box,
  chakra,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import type { Tour } from "@/sections/tours";

export const Map = ({ images, texts }: Tour) => {
  return (
    <chakra.section as={HStack} minH="100vh">
      <Box position="relative">
        <Image src="/images/map.png" alt="Map" objectFit="cover" />
        <Image
          src={images.hero}
          position="absolute"
          bottom="12"
          right="0"
          w="lg"
          rounded="lg"
          shadow="xl"
          alt="Tour"
        />
      </Box>
      <Container>
        <Stack spacing="8">
          <Heading size="4xl">{texts.city.title}</Heading>
          <Stack spacing="4">
            {texts.city.paragraphs.map((text, index) => (
              <Text key={index} fontSize="2xl">
                {text}
              </Text>
            ))}
          </Stack>
        </Stack>
      </Container>
    </chakra.section>
  );
};

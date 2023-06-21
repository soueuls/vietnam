import {
  chakra,
  Box,
  Flex,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Image,
} from "@chakra-ui/react";
import type { Tour as TourProps } from "@/sections/tours";

import { PlaneIcon } from "@/components/icons";

export const TourHero = ({ name, texts, images }: TourProps) => {
  return (
    <chakra.section as={Flex} minH="100vh" bg="secondary.2">
      <Flex flex={6} align="center">
        <Container>
          <Stack spacing="8" align="flex-start" color="white">
            <Heading size="4xl">{texts.hero.title}</Heading>
            <Stack spacing="4">
              {texts.hero.paragraphs.map((text, index) => (
                <Text key={index} fontSize="2xl">
                  {text}
                </Text>
              ))}
            </Stack>
            <Button
              size="lg"
              color="white"
              bg="accent"
              rightIcon={<PlaneIcon boxSize="8" />}
            >
              Book this tour!
            </Button>
          </Stack>
        </Container>
      </Flex>
      <Box flex={4}>
        <Image src={images.hero} alt={name} objectFit="cover" h="full" />
      </Box>
    </chakra.section>
  );
};

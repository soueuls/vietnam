import {
  chakra,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

import type { Tour } from "@/sections/tours";

import { Gallery } from "./Gallery";

export const PhotoAlbum = ({ images }: Tour) => {
  return (
    <chakra.section py="24" bg="secondary.1">
      <Container maxW="container.xl">
        <HStack spacing="12">
          <Container>
            <Stack spacing="4">
              <Heading size="4xl">Hello World</Heading>
              <Text fontSize="2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis ipsa vero odio cumque, doloremque aspernatur at
                numquam dignissimos maxime quam cupiditate, ducimus doloribus
                asperiores commodi laudantium voluptatibus. Ullam, eius
                reiciendis?
              </Text>
              <Text fontSize="2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis ipsa vero odio cumque, doloremque aspernatur at
                numquam dignissimos maxime quam cupiditate, ducimus doloribus
                asperiores commodi laudantium voluptatibus. Ullam, eius
                reiciendis?
              </Text>
            </Stack>
          </Container>
          <Gallery images={images.gallery} />
        </HStack>
      </Container>
    </chakra.section>
  );
};

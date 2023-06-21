import NextLink from "next/link";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Image,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import type { Tour } from "./types";

export const TourCard = ({ slug, name, images, texts }: Tour) => {
  return (
    <Card
      shadow="md"
      rounded="xl"
      transition="all 0.3s"
      _hover={{ shadow: "2xl" }}
    >
      <CardHeader pb="0">
        <Image
          src={images.hero}
          alt={name}
          height="64"
          w="full"
          objectFit="cover"
        />
      </CardHeader>
      <CardBody display="flex">
        <Stack align="flex-start" justify="space-between" spacing="6">
          <Stack spacing="0" color="blue.800">
            <Heading size="lg">{name}</Heading>
            <Text>{texts.shortDescription}</Text>
          </Stack>
          <Button
            as={NextLink}
            href={{ pathname: "/tours/[slug]", query: { slug } }}
            variant="outline"
            colorScheme="blue"
          >
            Discover
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

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

type Props = {
  imageUrl: string;
  name: string;
  shortDescription: string;
};
export const TourCard = ({ imageUrl, name, shortDescription }: Props) => {
  return (
    <Card
      shadow="md"
      rounded="xl"
      transition="all 0.3s"
      _hover={{ shadow: "2xl" }}
    >
      <CardHeader pb="0">
        <Image
          src={imageUrl}
          alt={name}
          height="64"
          w="full"
          objectFit="cover"
        />
      </CardHeader>
      <CardBody display="flex">
        <Stack justify="space-between" spacing="6">
          <Stack spacing="0" color="blue.800">
            <Heading size="lg">{name}</Heading>
            <Text>{shortDescription}</Text>
          </Stack>
          <Button variant="outline" colorScheme="blue">
            Discover
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

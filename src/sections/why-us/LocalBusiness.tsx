import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const LocalBusinessImage = require("/public/images/reasons/local-business.jpg");

const Header = () => {
  return (
    <Stack spacing="6" maxW="prose">
      <Heading size="xl">2. We work with small family business only</Heading>
      <Stack spacing="4" fontSize="xl">
        <Text>
          Each of restaurants, cafes and shops you will visit are small, local,
          authentic and family-owned businesses.
        </Text>
        <Text>
          You will get the chance to learn more about the incredible history of
          Vietnam and explore typical spots where Saigonese like to go white
          contributing to the local economy.
        </Text>
        <Text>
          Finis les objets de contrefaçon, ou les endroits bondés de touristes :
          découvrez les lieux “cachés” d’Hanoï.
        </Text>
      </Stack>
    </Stack>
  );
};

export const LocalBusiness = () => {
  return (
    <HStack spacing="12" justify="flex-end">
      <Box rounded="xl" overflow="hidden">
        <Image
          src={LocalBusinessImage}
          width={500}
          alt="A woman cook in a small family restaurant in Saigon"
        />
      </Box>
      <Header />
    </HStack>
  );
};

import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const NoTrapImage = require("/public/images/reasons/tourist-trap.jpg");

const Header = () => {
  return (
    <Stack spacing="6" maxW="prose">
      <Heading size="xl">3. No tourists traps!</Heading>
      <Stack spacing="4" fontSize="xl">
        <Text>
          As a tourist, nothing is worst taken where everything is overpriced.
        </Text>
        <Text>
          We want to bring you the most authentic experience so If you want to
          buy souvenirs, we will be happy to recommend or drive you there and
          bargain for you.
        </Text>
        <Text>
          But we will never sell our soul for that, we take no comission and no
          kickbacks.
        </Text>
      </Stack>
    </Stack>
  );
};

export const NoTouristsTraps = () => {
  return (
    <HStack spacing="12" justify="flex-end">
      <Header />
      <Box rounded="xl" overflow="hidden">
        <Image src={NoTrapImage} width={500} alt="No tourist trap" />
      </Box>
    </HStack>
  );
};

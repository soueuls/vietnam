import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack spacing={{ base: "4", sm: "6" }} maxW="prose">
      <Heading size={{ base: "2xl", sm: "xl" }}>3. No tourists traps!</Heading>
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
    <Stack
      direction={{ base: "column", md: "row" }}
      alignItems={{ md: "center" }}
      spacing={{ base: "6", md: "12" }}
      justify={{ md: "flex-end" }}
    >
      <Header />
      <Image
        src={"images/reasons/tourist-trap.jpg"}
        rounded="xl"
        width={500}
        alt="No tourist trap"
      />
    </Stack>
  );
};

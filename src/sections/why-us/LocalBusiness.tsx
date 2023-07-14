import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack spacing={{ base: "4", sm: "6" }} maxW="prose">
      <Heading size={{ base: "2xl", sm: "xl" }}>
        2. We work with small family business only
      </Heading>
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
    <Stack
      direction={{ base: "column-reverse", md: "row" }}
      alignItems={{ md: "center" }}
      spacing={{ base: "6", md: "12" }}
      justify={{ md: "flex-end" }}
    >
      <Image
        src={"/images/reasons/local-business.jpg"}
        rounded="xl"
        width={500}
        alt="A woman cook in a small family restaurant in Saigon"
      />
      <Header />
    </Stack>
  );
};

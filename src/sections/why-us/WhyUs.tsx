import { chakra, Container, Stack } from "@chakra-ui/react";

import { Reasons } from "./Reasons";
import { PieCharts } from "./PieCharts";
import { LocalBusiness } from "./LocalBusiness";
import { NoTouristsTraps } from "./NoTouristsTraps";

export const WhyUs = () => {
  return (
    <chakra.section id="why-us" py={{ base: "6", md: "12" }}>
      <Reasons />
      <Container maxW="container.xl" py={{ base: "12", md: "24" }}>
        <Stack spacing={{ base: "16", md: "20" }}>
          <PieCharts />
          <LocalBusiness />
          <NoTouristsTraps />
        </Stack>
      </Container>
    </chakra.section>
  );
};

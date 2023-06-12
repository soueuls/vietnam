import { chakra, Container, Stack } from "@chakra-ui/react";

import { Reasons } from "./Reasons";
import { PieCharts } from "./PieCharts";
import { LocalBusiness } from "./LocalBusiness";
import { NoTouristsTraps } from "./NoTouristsTraps";

export const WhyUs = () => {
  return (
    <chakra.section py="12">
      <Reasons />
      <Container maxW="container.xl" py="24">
        <Stack spacing="20">
          <PieCharts />
          <LocalBusiness />
          <NoTouristsTraps />
        </Stack>
      </Container>
    </chakra.section>
  );
};

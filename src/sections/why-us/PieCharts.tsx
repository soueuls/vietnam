import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  HStack,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { Pie } from "react-roughviz";

const GuidesImage = require("/public/images/reasons/guides.jpg");

const studentColor = "#F3D568";
const companyColor = "#3C6174";
const foodColor = "#F06767";
const transportColor = "#7AD4E8";

const pieProps = {
  colors: [studentColor, companyColor, foodColor, transportColor],
  fillStyle: "zigzag",
  roughness: 4,
  font: "indie flower",
};

const Header = () => {
  return (
    <Stack spacing="6" maxW="prose">
      <Heading size="xl">1. We pay our guides well</Heading>
      <Stack spacing="4" fontSize="xl">
        <Text>
          In Vietnam, the tour industry is a giant war on prices. Most of the
          guides are students, often cumulating two low-paying jobs to pay for
          their tuitions.
        </Text>
        <Text>I know it. I have been there myself.</Text>
        <Text>
          When I started this company, I quickly decided I did not want any of
          that.
        </Text>
        <Text>
          Yes, we are a bit more expensive than our competitors but 100% of the
          extra profit goes directly into our guides pockets.
        </Text>
        <Text>
          Most companies decide to cut the costs to the bare minimum which means
          :
        </Text>
        <List spacing="2">
          <ListItem>
            🍜 Instead of sharing a meal together, the guides will likely
            decline to order anything.{" "}
            <b>
              Our guides will be happy to have lunch or dinner and tell you
              everything you want to know about the real life in Vietnam.
            </b>
          </ListItem>
          <ListItem>
            ⏰ The schedule and the itinary are rigid.{" "}
            <b>We can afford to be flexible.</b>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};

export const PieCharts = () => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(true);
  }, []);

  if (!shown) {
    return null;
  }

  return (
    <Stack spacing="20">
      <HStack spacing="12">
        <Header />
        <Box rounded="xl" overflow="hidden">
          <Image
            src={GuidesImage}
            width={600}
            alt="One guide and one customer"
          />
        </Box>
      </HStack>
      <Stack spacing="8">
        <Heading textAlign="center">This is how we split our revenues</Heading>
        <Stack
          justify="space-around"
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
          spacing="8"
        >
          <Pie
            data={{
              labels: ["Students", "Company", "Food", "Transport"],
              values: [40, 25, 25, 10],
            }}
            title="Our company"
            {...pieProps}
          />
          <Pie
            data={{
              labels: ["Students", "Company", "Food", "Transport"],
              values: [20, 45, 25, 10],
            }}
            title="Average competitor"
            {...pieProps}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

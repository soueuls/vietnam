import { chakra, Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";

const Layer1Image = require("/public/images/vietnam-fullpage-layer1.jpg");
const Layer2Image = require("/public/images/vietnam-fullpage-layer2.png");
const JoshuaImage = require("/public/images/joshua.png");

const MotionBox = motion(Box);

export const Hero = () => {
  return (
    <chakra.section h="100vh" position="relative">
      <Image
        fill
        placeholder="blur"
        src={Layer1Image}
        style={{ objectFit: "cover", objectPosition: "bottom 60% left 50%" }}
        alt=""
      />
      <MotionBox
        position="relative"
        h="full"
        pt="10vh"
        px="24"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 70,
        }}
      >
        <Heading
          color="white"
          size="6xl"
          textAlign="center"
          fontWeight="extrabold"
          lineHeight="none"
          textTransform="uppercase"
        >
          Welcome to
          <br />
          Vietnam!
        </Heading>
      </MotionBox>
      <Image
        fill
        placeholder="blur"
        src={Layer2Image}
        style={{ objectFit: "cover", objectPosition: "bottom 60% left 50%" }}
        alt=""
      />
      <Flex
        position="absolute"
        w="full"
        bottom="0"
        justify="flex-end"
        align="flex-end"
      >
        <chakra.blockquote color="white" maxW="prose" py="12" px="4">
          <Text
            fontFamily="handwriting"
            fontSize="5xl"
            textShadow="2px 2px 2px #000"
            textAlign="right"
          >
            Hello, I am Joshua. I just founded the first ethical travel company
            in Vietnam
          </Text>
        </chakra.blockquote>
        <Image width={350} src={JoshuaImage} alt="Joshua" priority />
      </Flex>
    </chakra.section>
  );
};

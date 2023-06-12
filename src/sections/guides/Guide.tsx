import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import type { Guide as GuideProps } from "./types";

const MotionStack = motion(Stack);

type Props = {
  guide: GuideProps;
};

export const Guide = ({ guide }: Props) => {
  return (
    <MotionStack
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      spacing="4"
    >
      <Heading size="2xl">
        {guide.emoji} {guide.name}
      </Heading>
      <Text fontSize="xl">{guide.description}</Text>
    </MotionStack>
  );
};

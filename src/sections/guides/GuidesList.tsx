import { useState } from "react";
import { Container, Stack } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import type { Guide as GuideProps } from "./types";
import { GUIDES } from "./fixtures";
import { GuidesAvatar } from "./GuidesAvatar";
import { Guide } from "./Guide";

export const GuidesList = () => {
  const [currentGuide, setCurrentGuide] = useState<GuideProps | null>(null);

  return (
    <Stack direction={{ base: "column", lg: "row" }} spacing="12">
      <GuidesAvatar guides={GUIDES} onHover={setCurrentGuide} />
      <AnimatePresence>
        {currentGuide && (
          <Container>
            <Guide guide={currentGuide} />
          </Container>
        )}
      </AnimatePresence>
    </Stack>
  );
};

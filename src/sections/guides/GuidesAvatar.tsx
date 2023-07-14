import { Image, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { Guide } from "./types";

const MotionImage = motion(Image);

type Props = {
  guides: Guide[];
  onHover: (guide: Guide | null) => void;
};

export const GuidesAvatar = ({ guides, onHover }: Props) => {
  return (
    <Grid gridTemplateColumns="1fr 1fr" gap={{ base: "4", md: "10" }}>
      {guides.map((guide) => (
        <GridItem
          key={guide.imageUrl}
          onMouseEnter={() => onHover(guide)}
          onMouseLeave={() => onHover(null)}
        >
          <MotionImage
            key={guide.imageUrl}
            src={guide.imageUrl}
            boxSize={{ base: "40", md: "56" }}
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{
              scale: 1.2,
            }}
            objectFit="cover"
            rounded="full"
            alt={guide.name}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

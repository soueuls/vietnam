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
    <Grid gridTemplateColumns="1fr 1fr" gap="10">
      {guides.map((guide, index) => (
        <GridItem
          key={guide.imageUrl}
          onMouseEnter={() => onHover(guide)}
          onMouseLeave={() => onHover(null)}
        >
          <MotionImage
            key={guide.imageUrl}
            src={guide.imageUrl}
            boxSize="56"
            whileHover={{
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

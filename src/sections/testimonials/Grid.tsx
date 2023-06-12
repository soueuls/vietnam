import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { MasonryGrid, MasonryGridItemProps } from "@/components";

const Image1 = require("/public/images/testimonials/1.jpg");
const Image2 = require("/public/images/testimonials/2.jpg");
const Image3 = require("/public/images/testimonials/3.jpg");
const Image4 = require("/public/images/testimonials/4.jpg");
const Image5 = require("/public/images/testimonials/5.jpg");
const Image6 = require("/public/images/testimonials/6.jpg");
const Image7 = require("/public/images/testimonials/7.jpg");

const items = [Image5, Image1, Image4, Image2, Image6, Image7, Image3];

type Image = (typeof items)[number];

export const Grid = () => {
  return <MasonryGrid<Image> items={items} render={GridImage} />;
};

const GridImage = ({ data, width }: MasonryGridItemProps<Image>) => {
  return (
    <Box p="1.5">
      <Box position="relative" rounded="xl" overflow="hidden">
        <Image src={data} alt="" width={width} />
      </Box>
    </Box>
  );
};

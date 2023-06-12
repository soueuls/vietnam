import { Montserrat, Indie_Flower } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const indieFlower = Indie_Flower({ weight: "400", subsets: ["latin"] });

export const fonts = {
  heading: montserrat.style.fontFamily,
  body: montserrat.style.fontFamily,
  handwriting: indieFlower.style.fontFamily,
};

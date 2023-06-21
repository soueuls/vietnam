type Images = {
  hero: string;
  gallery: string[];
};

type Texts = {
  shortDescription: string;
  hero: {
    title: string;
    paragraphs: string[];
  };
  city: {
    title: string;
    paragraphs: string[];
  };
  included: string[];
};

export type Tour = {
  slug: string;
  images: Images;
  name: string;
  texts: Texts;
  price: number;
};

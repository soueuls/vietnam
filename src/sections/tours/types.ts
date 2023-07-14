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
  itinerary: string[];
};

type Pricing = {
  adults: number;
  kids: number;
};

type Revenues = {
  student: number;
  company: number;
  food: number;
  transport: number;
};

export type Tour = {
  slug: string;
  images: Images;
  name: string;
  texts: Texts;
  prices: Pricing;
  revenues: Revenues;
};

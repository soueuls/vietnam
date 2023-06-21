import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

import type { Tour as TourProps } from "@/sections/tours";
import { TOURS } from "@/sections/tours/fixtures";
import { TourHero, Map, PhotoAlbum } from "@/sections";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = TOURS.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

type PageProps = {
  tour: TourProps;
};

export const getStaticProps: GetStaticProps<PageProps, Params> = async ({
  params,
}) => {
  const tour = TOURS.find((t) => t.slug === params?.slug);
  if (!tour) {
    return { notFound: true };
  }

  return { props: { tour } };
};

const TourPage: NextPage<PageProps> = ({ tour }) => {
  return (
    <>
      <TourHero {...tour} />
      <Map {...tour} />
      <PhotoAlbum {...tour} />
    </>
  );
};

export default TourPage;

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

type Props = {
  images: string[];
};

export const Gallery = ({ images }: Props) => {
  const items = images.map((url) => ({
    original: url,
  }));

  return (
    <ImageGallery
      items={items}
      showNav={false}
      showThumbnails={false}
      showPlayButton={false}
      showFullscreenButton={false}
      autoPlay
    />
  );
};

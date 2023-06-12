import { ComponentType, useEffect, useState } from "react";
import { Masonry, RenderComponentProps } from "masonic";

type MasonryGridProps<T> = {
  items: T[];
  render: ComponentType<RenderComponentProps<T>>;
};

export type MasonryGridItemProps<T> = RenderComponentProps<T>;

export const MasonryGrid = <T,>({ items, render }: MasonryGridProps<T>) => {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    setShown(true);
  }, []);

  if (!shown) {
    return null;
  }

  return <Masonry {...{ items, render }} />;
};

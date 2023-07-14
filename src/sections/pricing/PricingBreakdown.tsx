import { useState, useEffect } from "react";
import BigNumber from "bignumber.js";
import { Pie } from "react-roughviz";

import { Tour } from "@/sections/tours";

type Props = {
  tour: Tour;
};

export const PricingBreakdown = ({ tour }: Props) => {
  const studentColor = "#F3D568";
  const companyColor = "#3C6174";
  const foodColor = "#F06767";
  const transportColor = "#7AD4E8";
  const pieProps = {
    colors: [studentColor, companyColor, foodColor, transportColor],
    fillStyle: "zigzag",
    roughness: 4,
    font: "indie flower",
  };

  const price = tour.prices.adults;
  const revenues = tour.revenues;

  const studentShare = BigNumber(price)
    .div(100)
    .times(revenues.student)
    .toFixed(2);
  const companyShare = BigNumber(price)
    .div(100)
    .times(revenues.company)
    .toFixed(2);
  const foodShare = BigNumber(price).div(100).times(revenues.food).toFixed(2);
  const transportShare = BigNumber(price)
    .div(100)
    .times(revenues.transport)
    .toFixed(2);

  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(true);
  }, []);

  if (!shown) {
    return null;
  }

  return (
    <Pie
      data={{
        labels: ["Students", "Company", "Food", "Transport"],
        values: [studentShare, companyShare, foodShare, transportShare],
      }}
      title="Price breakdown"
      {...pieProps}
    />
  );
};

import Image, { StaticImageData } from "next/image";
import React from "react";
import cardBorder from "@/assets/cardBorder.svg";

type Props = {
  image: StaticImageData;
};

const BrandCard = ({ image }: Props) => {
  return (
    <div className="relative flex justify-center items-center top-0 left-0">
      <Image
        src={cardBorder}
        alt="CardBorder"
        className="relative top-0 left-0"
      />
      <Image src={image} alt="Brands" className="absolute w-4/5 md:w-1/2" />
    </div>
  );
};

export default BrandCard;

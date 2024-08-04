"use client";
import Image from "next/image";
import React, { useState } from "react";
import pic1 from "@/assets/product_img_highres.png";

type Props = {
  product: {
    name: string;
    price: number;
    description: string;
    sizes: string[];
    colors: string[];
    rating: {
      stars: number;
      reviews: number;
    };
  };
};

const ProductImage = ({ product }: Props) => {
  // Images state
  // Need to be replaced accordingly.
  // const [currentImg, setCurrentImg] = useState<string>();
  // const [images, setImages] = useState<string[]>([]);

  return (
    <div className="flex flex-col px-10 py-5 gap-5 items-center w-full justify-center">
      <div className="bg-backgroundc rounded-xl px-10 py-5 w-full">
        <Image src={pic1} alt="product_img" className="w-full" />
      </div>
      <div className="flex gap-5 w-full">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div className="bg-backgroundc rounded-lg px-3 py-2" key={i}>
              <Image src={pic1} alt="product_img" className=" " />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductImage;

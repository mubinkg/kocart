"use client";
import Image from "next/image";
import React, { useState } from "react";
import pic1 from "@/assets/product_img_highres.png";


const ProductImage = ({ product }: any) => {
  return (
    <div className="flex flex-col px-10 py-5 gap-5 items-center w-full justify-center">
      <div className="bg-backgroundc rounded-xl px-10 py-5 w-full">
        <Image src={product?.pro_input_image} width={400} height={400} alt="product_img" className="w-full" />
      </div>
      <div className="flex gap-5 w-full">
        {product?.other_images?.map((img:any) => (
            <div className="bg-backgroundc rounded-lg px-3 py-2" key={img}>
              <Image src={img} alt="product_img" className=" " width={150} height={150}/>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductImage;

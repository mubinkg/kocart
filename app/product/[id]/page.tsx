'use client'

import React from "react";
import HighlightCard from "@/components/HighlightCard";
import ProductDetails from "@/components/ProductDetails";
import ProductImage from "@/components/ProductImage";
import Product from "@/components/Product";
import { useQuery } from "@apollo/client";
import { PRODUCT_DETAILS } from "@/graphql/query/product";

type Props = {
  params:{
    id: string
  }
};

const ProductType = {
  name: "Oversized Jeas Jacket",
  price: 140,
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio officiis reiciendis accusamus delectus? Saepe maxime aliquam cupiditate exercitationem unde quasi deserunt iste vero, est a, officiis deleniti soluta necessitatibus omnis.",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["#41469B", "#78A341", "#8A4880", "#D7C844", "#FF4A54"],
  rating: {
    stars: 4.5,
    reviews: 120,
  },
};

const page = ({params: {id}}: Props) => {
  const {data} = useQuery(PRODUCT_DETAILS, {variables: {
    "productId": id
  }, fetchPolicy: "no-cache"})

  return (
    <div className="min-h-screen px-3 md:px-10 py-5">
      <div className="w-full flex flex-col px-5 md:px-0 md:flex-row">
        <div className="w-full md:w-1/2">
          <ProductImage product={data?.productForWeb} />
        </div>
        <div className="w-full md:w-1/2">
          <ProductDetails product={data?.productForWeb} />
        </div>
      </div>
      <div className="py-10">
        <HighlightCard text="Related Items" />
        <h2 className="px-5 text-2xl py-5 font-semibold font-sans">
          Explore more related products
        </h2>
        <Product/>
      </div>
    </div>
  );
};

export default page;

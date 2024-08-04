import React from "react";
import HighlightCard from "@/components/HighlightCard";
import ProductDetails from "@/components/ProductDetails";
import ProductImage from "@/components/ProductImage";
import { ourProducts } from "@/constants/products";
import ProductCard from "@/components/ProductCard";

type Props = {};

const Product = {
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

const page = (props: Props) => {
  return (
    <div className="min-h-screen px-3 md:px-10 py-5">
      <div className="w-full flex flex-col px-5 md:px-0 md:flex-row">
        <div className="w-full md:w-1/2">
          <ProductImage product={Product} />
        </div>
        <div className="w-full md:w-1/2">
          <ProductDetails product={Product} />
        </div>
      </div>
      <div className="py-10">
        <HighlightCard text="Related Items" />
        <h2 className="px-5 text-2xl py-5 font-semibold font-sans">
          Explore more related products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-y-5 gap-x-5 px-2 md:px-5">
          {ourProducts.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

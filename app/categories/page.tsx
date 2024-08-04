import React from "react";
import ProductCategories from "@/components/ProductCategories";
import { categoryProduct } from "@/constants/products";
import ProductCard from "@/components/ProductCard";
import Filters from "@/components/Filters";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="min-h-screen px-8 md:px-14 py-10 flex md:flex-row flex-col gap-5 ">
      <div className="hidden md:block w-1/4 h-full px-10 border rounded-xl">
        <ProductCategories />
      </div>
      <div className="border md:hidden flex justify-between items-center px-7 py-3 rounded-lg">
        <Filters />
      </div>
      <div className="w-full md:w-3/4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {categoryProduct.map((item, idx) => (
            <ProductCard key={idx} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

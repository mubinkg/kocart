'use client'

import React, { useEffect, useState } from "react";
import ProductCategories from "@/components/ProductCategories";
import { categoryProduct } from "@/constants/products";
import ProductCard from "@/components/ProductCard";
import Filters from "@/components/Filters";
import { useQuery } from "@apollo/client";
import { GET_ATTRIBUTE_SET_VALUES, PRODUCT_CATEGORY } from "@/graphql/query/category";

type Props = {};

const page = (props: Props) => {
  const [filterCategories, setFilterCategries] = useState<string[]>([])
  const {data, loading} = useQuery(PRODUCT_CATEGORY, {variables:{
    "getCategoriesInput": {
      "limit": 100,
      "offset": 0
    }
  }})

  const {data:attributeSetData} = useQuery(GET_ATTRIBUTE_SET_VALUES)

  useEffect(()=>{
    console.log(filterCategories)
  }, [,filterCategories])

  return (
    <div className="min-h-screen px-8 md:px-14 py-10 flex md:flex-row flex-col gap-5 ">
      <div className="hidden md:block w-1/4 h-full px-10 border rounded-xl">
        <ProductCategories 
          categories={data?.categories} 
          loading={loading} 
          attributeSetValues={attributeSetData?.getAttributeValuesByAttributeSet}
          filterCategories = {filterCategories}
          setFilterCategries = {setFilterCategries}
        />
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

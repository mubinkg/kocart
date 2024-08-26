'use client'

import React, { useEffect, useState } from "react";
import ProductCategories from "@/components/ProductCategories";
import { categoryProduct } from "@/constants/products";
import ProductCard from "@/components/ProductCard";
import Filters from "@/components/Filters";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_ATTRIBUTE_SET_VALUES, PRODUCT_CATEGORY } from "@/graphql/query/category";
import { GET_PRODUCT_FOR_WEB } from "@/graphql/query/product";

const page = () => {
  const [filterCategories, setFilterCategries] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState<number>()
  const [maxPrice, setMaxPrice] = useState<number>()
  const { data, loading } = useQuery(PRODUCT_CATEGORY, {
    variables: {
      "getCategoriesInput": {
        "limit": 100,
        "offset": 0
      }
    }
  })

  const { data: attributeSetData } = useQuery(GET_ATTRIBUTE_SET_VALUES)
  const [getProducts, { data: productData, loading: productLoading }] = useLazyQuery(GET_PRODUCT_FOR_WEB)

  useEffect(() => {
    const query:Record<string, any> = {
      "limit": 100,
      "offset": 0
    }
    if(filterCategories.length){
      query["category_id"] = filterCategories
    }
    if(minPrice && maxPrice){
      query['min_price'] = parseFloat(minPrice.toString())
      query['max_price'] = parseFloat(maxPrice.toString())
    }

    getProducts({
      variables: {
        "getProductInput": query
      },
      fetchPolicy: "no-cache"
    })

  }, [, filterCategories, minPrice, maxPrice])

  const mainCompoent = (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 my-4 mx-12">
      {
        productData?.getProductForWeb?.length ?
          <>
            {productData?.getProductForWeb?.map((item: any) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </>
          : "No Products Found"
      }
    </div>
  )

  return (
    <div className="min-h-screen px-8 md:px-14 py-10 flex md:flex-row flex-col gap-5 ">
      <div className="hidden md:block w-1/4 h-full px-10 border rounded-xl">
        <ProductCategories
          categories={data?.categories}
          loading={loading}
          attributeSetValues={attributeSetData?.getAttributeValuesByAttributeSet}
          filterCategories={filterCategories}
          setFilterCategries={setFilterCategries}
          minPrice = {minPrice}
          setMinPrice = {setMinPrice}
          maxPrice = {maxPrice}
          setMaxPrice = {setMaxPrice}
        />
      </div>
      <div className="border md:hidden flex justify-between items-center px-7 py-3 rounded-lg">
        <Filters />
      </div>
      <div className="w-full md:w-3/4">
        {
          productLoading ? 'Loading...': mainCompoent
        }
      </div>
    </div>
  );
};

export default page;

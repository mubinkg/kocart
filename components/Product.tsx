'use client'

import { ourProducts } from '@/constants/products'
import React from 'react'
import ProductCard from './ProductCard'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT_LIST } from '@/graphql/query/product'

const Product = () => {
    const {data} = useQuery(GET_PRODUCT_LIST, {variables: {
        "getProductInput": {
          "limit": 10,
          "offset": 0
        }
      }, fetchPolicy: "no-cache"})

      return (
        <div className="grid grid-cols-2 gap-x-3 lg:gap-x-5 gap-y-5 lg:gap-y-10 mt-4 sm:grid-cols-2 lg:grid-cols-4">
            {data?.getProductForWeb?.map((product:any, index:number) => (
                <ProductCard key={index} product={product} variant={product?.productvariants[0]}/>
            ))}
        </div>
    )
}

export default Product

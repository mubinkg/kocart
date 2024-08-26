'use client'

import ProductCard from "@/components/ProductCard";
import { GET_PRODUCT_FOR_WEB } from "@/graphql/query/product";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect } from "react";

export default function Page({ params }: any) {
    const [getProducts, { data , loading}] = useLazyQuery(GET_PRODUCT_FOR_WEB)

    useEffect(() => {
        if (params?.id) {
            getProducts({
                variables: {
                    "getProductInput": {
                        "category_id": params.id,
                        "limit": 100,
                        "offset": 0
                    }
                },
                fetchPolicy: "no-cache"
            })
        }
    }, [params])

    const mainCompoent = (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 my-4 mx-12">
            {
                data?.getProductForWeb?.length ?
                    <>
                        {data?.getProductForWeb?.map((item: any) => (
                            <ProductCard key={item._id} product={item} />
                        ))}
                    </>
                    : "No Products Found"
            }
        </div>
    )

    return (
        <div className="w-full">
            {
                loading ? 'Loading...' : mainCompoent
            }
        </div>
    )
}
'use client'

import { SECTION_LIST } from '@/graphql/query/section'
import { useQuery } from '@apollo/client'
import React from 'react'
import HighlightCard from '../HighlightCard'
import { Button } from '../ui/button'
import ProductCard from '../ProductCard'

const Sctions = () => {
    const { data } = useQuery(SECTION_LIST, {
        variables: {
            "getSectionInput": {
                "limit": 10,
                "offset": 0,
                "p_limit": 2,
                "p_offset": 0
            }
        },
        fetchPolicy: "no-cache"
    })
    console.log(data)
    return (
        <>
            <div className='px-5 md:px-10 pt-8 mt-10'>
                <HighlightCard text="This month" />
            </div>
            {
                data?.sectionForWeb?.map((section: any) => (
                    <section key={section._id} className="px-5 md:px-10 py-8 mt-10">
                        <div className="flex items-center justify-between pt-10 px-4">
                            <h2 className="text-xl md:text-3xl font-semibold">
                                {section.title}
                            </h2>
                            <Button className="bg-secoundaryc hover:bg-primaryc px-5 md:px-10 rounded-full">
                                View all
                            </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 py-10">
                            {section?.products?.map((product: any, index: any) => (
                                <ProductCard key={index} product={product} />
                            ))}
                        </div>
                    </section>
                ))
            }
        </>
    )
}

export default Sctions

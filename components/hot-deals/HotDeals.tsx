'use client'

import React from 'react'
import HighlightCard from '../HighlightCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ProductCard from '../ProductCard'
import { useQuery } from '@apollo/client'
import { HOT_DELAS } from '@/graphql/query/hot-deals'
import { getTimeDifference } from '@/lib/utils'

const HotDeals = () => {
    const { data } = useQuery(HOT_DELAS, { fetchPolicy: "no-cache", variables: { limit: 100, offset: 0 } })
    return (
        <section className="px-1 md:px-10 md:py-8 mt-10">
            <HighlightCard text="Today's" />
            <Carousel className="w-full md:px-5 py-1">
                <div className="flex justify-between gap-0 w-full py-10 px-4">
                    <h2 className="text-xl md:text-3xl font-semibold">Hot Deals 🔥</h2>
                    <div className="flex gap-10">
                        <CarouselPrevious className="relative md:w-14 md:h-14 bg-gray-100 left-0">
                            <ArrowLeft className="h-3 w-3 md:h-5 md:w-5" />
                        </CarouselPrevious>
                        <CarouselNext className="relative md:w-14 md:h-14 bg-gray-100 right-0">
                            <ArrowRight className="h-3 w-3 md:h-5 md:w-5" />
                        </CarouselNext>
                    </div>
                </div>
                <CarouselContent className="ml-0 py-1">
                    {data?.hotDeals?.map((hotdeal: any, index: any) => {
                        const {days,hours,minutes} = getTimeDifference(hotdeal.validTime)
                        return (
                            <CarouselItem
                                key={index}
                                className="basis-1/2 sm:basis-1/3 lg:basis-1/4"
                            >
                                <ProductCard days={days} hours={hours} minutes={minutes} product={hotdeal?.product} variant={hotdeal?.product?.productvariants[0]} />
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
            </Carousel>
        </section>
    )
}

export default HotDeals

'use client'

import React from 'react'
import HighlightCard from '../HighlightCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import BrandCard from '../BrandCard'
import { useGetBrand } from '@/hooks/brand/useGetBrands'

const BrandSenction = () => {
    const {brands} = useGetBrand({limit: 100, offset: 0})
  return (
    <section className="px-5 md:px-10 py-8 mt-10">
        <HighlightCard text="Brands" />
        <Carousel className="w-full px-5">
          <div className="flex justify-between gap-0 w-full py-10">
            <h2 className="text-xl md:text-3xl font-semibold">
              Browse by Brands
            </h2>
            <div className="flex gap-10">
              <CarouselPrevious className="relative md:w-14 md:h-14 bg-gray-100 left-0">
                <ArrowLeft className="h-3 w-3 md:h-5 md:w-5" />
              </CarouselPrevious>
              <CarouselNext className="relative md:w-14 md:h-14 bg-gray-100 right-0">
                <ArrowRight className="h-3 w-3 md:h-5 md:w-5" />
              </CarouselNext>
            </div>
          </div>
          <CarouselContent className="">
            {brands.map((brand:any) => (
              <CarouselItem
                key={brand._id}
                className="basis-1/4 sm:basis-1/3 lg:basis-1/6"
              >
                <BrandCard image={brand?.image} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
  )
}

export default BrandSenction

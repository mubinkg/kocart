import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import HighlightCard from "@/components/HighlightCard";
import BrandCard from "@/components/BrandCard";
import brands from "@/constants/brands";
import { bestSelling, hotDeals, ourProducts } from "@/constants/products";

export default function Component() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
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
            {hotDeals.map((product, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 lg:basis-1/4"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
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
            {brands.map((brand, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 sm:basis-1/3 lg:basis-1/6"
              >
                <BrandCard image={brand} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <section className="px-5 md:px-10 py-8 mt-10">
        <HighlightCard text="This month" />
        <div className="flex items-center justify-between pt-10 px-4">
          <h2 className="text-xl md:text-3xl font-semibold">
            Best Selling Products
          </h2>
          <Button className="bg-secoundaryc hover:bg-primaryc px-5 md:px-10 rounded-full">
            View all
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 py-10">
          {bestSelling.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
      <section className="px-5 md:px-10 py-8 my-10">
        <HighlightCard text="Our Products" />

        <div className="flex items-center justify-between py-10 px-1">
          <h2 className="text-xl md:text-3xl font-semibold pl-3">
            Explore our Products
          </h2>
          <Button className="bg-secoundaryc hover:bg-primaryc px-5 md:px-10 rounded-full">
            View all
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-x-3 lg:gap-x-5 gap-y-5 lg:gap-y-10 mt-4 sm:grid-cols-2 lg:grid-cols-4">
          {ourProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

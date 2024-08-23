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
import { bestSelling, hotDeals, ourProducts } from "@/constants/products";
import BrandSenction from "@/components/home/BrandSenction";
import Product from "@/components/Product";
import HotDeals from "@/components/hot-deals/HotDeals";

export default function Component() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <HotDeals/>
      <BrandSenction/>
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
        <Product/>
      </section>
    </div>
  );
}

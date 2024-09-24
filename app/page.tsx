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
import Sections from "@/components/home/Sctions"

export default function Component() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <HotDeals/>
      <BrandSenction/>
      <Sections/>
      <section className="px-5 md:px-10 py-8 my-10">
        <HighlightCard text="Our Products" />

        <div className="flex items-center justify-between py-10 px-1">
          <h2 className="text-xl md:text-3xl font-semibold pl-3">
            Explore our Product List One First
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

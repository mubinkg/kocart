"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import heroImg from "@/assets/hero_slide.png";
import { Autour_One } from "next/font/google";
import { Button } from "./ui/button";
import ProgressCount from "./ProgressCount";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {};

type SlideProps = {
  bgImg: string;
  current: number;
  count: number;
};

const Slide = ({ bgImg, current, count }: SlideProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="lg:min-h-[15vh] bg-cover bg-no-repeat bg-center rounded-lg px-6 py-4 lg:px-14 lg:py-10 font-sans font-semibold "
    >
      <div className="w-full flex flex-col items-start gap-4 text-white ">
        <p className="text-sm lg:text-xl font-light">
          Fusion of elegance, comfort, and contemporary design.
        </p>
        <p className="text-xl lg:text-3xl pb-2 md:pb-5">
          Elevate your Look with our
          <br /> newest arrivals!🌟
        </p>
        <Button className="bg-white text-secoundaryc rounded-full font-semibold hover:text-white md:w-1/12">
          Shop Now
        </Button>
        <ProgressCount current={current} count={count} />
      </div>
    </div>
  );
};

const HeroSlider = (props: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="md:w-full px-5 md:px-10 py-5">
      <Carousel
        className="flex items-center"
        opts={{
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselPrevious className="absolute left-[-24px] z-10 w-14 h-14 hidden md:flex">
          <ChevronLeft className="h-6 w-6" stroke="#008ECC" />
        </CarouselPrevious>
        <CarouselContent className="rounded-lg">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <CarouselItem key={index} className="rounded-lg">
                <Slide bgImg={heroImg.src} current={current} count={count} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselNext className="absolute right-[-30px] z-10 w-14 h-14 hidden md:flex">
          <ChevronRight className="h-6 w-6" stroke="#008ECC" />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default HeroSlider;

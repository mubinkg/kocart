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
import ProgressCount from "./ProgressCount";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGetSliders } from "@/hooks/slider/useGetSlider";

type Props = {};

type SlideProps = {
  bgImg: string;
  current: number;
  count: number;
};

const Slide = ({ bgImg, current, count }: SlideProps) => {
  console.log(bgImg)

  return (
    <div>
        <div>
        <img src={bgImg} width="100%"/>
        </div>
        <ProgressCount current={current} count={count} />
    </div>
  );
};

const HeroSlider = (props: Props) => {
  const {sliders,loading,refetch} = useGetSliders({limit: 10,offset: 0})
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
          {sliders
            .map((slider:any) => (
              <CarouselItem key={slider?._id} className="rounded-lg">
                <Slide bgImg={slider?.image} current={current} count={count} />
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

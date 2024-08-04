import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

const FilterPrice = (props: Props) => {
  return (
    <div className="">
      <Accordion type="single" defaultValue="price" collapsible>
        <AccordionItem value="price">
          <AccordionTrigger>Filter by Price</AccordionTrigger>
          <AccordionContent className="w-full flex gap-5">
            <div>
              <p className="text-base font-medium text-gray-400">Minimum</p>
              <input
                type="number"
                placeholder="Min"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <div>
              <p className="text-base font-medium text-gray-400">Maximum</p>
              <input
                type="number"
                placeholder="Max"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterPrice;

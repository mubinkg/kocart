import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "./ui/accordion";
import { Checkbox } from "./ui/checkbox";

type Props = {};

const sizes = ["S", "M", "L", "XL", "XXL", "XXL"];

const ProductSizes = (props: Props) => {
  return (
    <div>
      <Accordion type="single" defaultValue="product_size" collapsible>
        <AccordionItem value="product_size">
          <AccordionTrigger>Product Sizes</AccordionTrigger>
          <AccordionContent>
            <div className="">
              {sizes.map((item, idx) => (
                <div key={idx} className="py-1 flex gap-2 font-semibold w-full">
                  <Checkbox className="w-5 h-5 data-[state=checked]:bg-secoundaryc border-gray-300" />
                  {item}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductSizes;

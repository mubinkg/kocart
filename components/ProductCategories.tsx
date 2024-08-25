'use cleint'

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "./ui/checkbox";
import FilterPrice from "./FilterPrice";
import SelectColor from "./SelectColor";
import ProductSizes from "./ProductSizes";
import { Button } from "./ui/button";

type Props = {
  categories:Category[],
  loading: boolean,
  attributeSetValues:[{
    _id: string,
    attributeSetName: string,
    attributeSetValues:[{
      _id: string,
      valueName: string
    }]
  }]
};

type Category = {
  _id: string,
  name: string
  children:Category[]
}

const types = ["Jackets", "Pants", "Dress", "Blouse", "Skirt", "Jeans"];

const ProductCategories = ({categories, loading, attributeSetValues}:Props) => {
  
  return (
    <div className="pb-5">
      <Accordion type="single" defaultValue="product_category" collapsible>
        <AccordionItem value="product_category">
          <AccordionTrigger>Product Categories</AccordionTrigger>
          <AccordionContent>
            {
              loading 
              ? 'loading..'
              :categories?.map((category:Category, idx:number) => (
                <div className="py-1 flex gap-2 font-semibold" key={idx}>
                  <Checkbox className="w-5 h-5 data-[state=checked]:bg-secoundaryc border-gray-300" />
                  {category?.name}
                </div>
              ))
            }
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <hr></hr>
      <div className="py-5">
        {types.map((item, idx) => (
          <div key={idx} className="py-1 flex gap-2 font-semibold">
            <Checkbox className="w-5 h-5 data-[state=checked]:bg-secoundaryc border-gray-300" />
            {item}
          </div>
        ))}
      </div>
      <hr></hr>
      <FilterPrice />
      {
        attributeSetValues?.map((attributeSet)=>(<SelectColor attributeSet={attributeSet} key={attributeSet._id}/>))
      }
      <div className="flex items-center justify-center">
        <Button className="bg-secoundaryc my-3 rounded-full w-1/2">
          Reset all
        </Button>
      </div>
    </div>
  );
};

export default ProductCategories;

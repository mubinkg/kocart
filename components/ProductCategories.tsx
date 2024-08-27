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
  }],
  filterCategories:string[],
  setFilterCategries: any,
  minPrice?: number,
  setMinPrice: any,
  maxPrice?: number,
  setMaxPrice:any,
  resetAll: any
};

type Category = {
  _id: string,
  name: string
  children:Category[]
}

const types = ["Jackets", "Pants", "Dress", "Blouse", "Skirt", "Jeans"];

const ProductCategories = ({categories, loading, attributeSetValues, filterCategories, setFilterCategries, minPrice, setMinPrice, maxPrice, setMaxPrice, resetAll}:Props) => {
  
  function setFilterCategoriesValue(e:any){
    const value = e.target.value
    const isExist = (filterCategories.find(val=>val === value))
    if(isExist){
      setFilterCategries([...filterCategories.filter(data=>value!==data)])
    }else{
      setFilterCategries([...filterCategories, value])
    }
  }

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
                  <Checkbox checked={filterCategories.find(val=>val === category._id) ? true : false} value={category._id} onClick={(e:any)=>setFilterCategoriesValue(e)} className="w-5 h-5 data-[state=checked]:bg-secoundaryc border-gray-300" />
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
      <FilterPrice
        minPrice = {minPrice}
        setMinPrice = {setMinPrice}
        maxPrice = {maxPrice}
        setMaxPrice = {setMaxPrice}
      />
      {
        attributeSetValues?.map((attributeSet)=>(<SelectColor attributeSet={attributeSet} key={attributeSet._id}/>))
      }
      <div className="flex items-center justify-center">
        <Button className="bg-secoundaryc my-3 rounded-full w-1/2" onClick={resetAll}>
          Reset all
        </Button>
      </div>
    </div>
  );
};

export default ProductCategories;

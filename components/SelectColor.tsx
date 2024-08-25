import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "./ui/checkbox";

type Props = {
  attributeSet: {
    _id: string,
    attributeSetName: string,
    attributeSetValues:[{
      _id: string,
      valueName: string
    }]
  }
}

const colors = [
  {
    name: "Red",
    value: "red",
  },
  {
    name: "Blue",
    value: "blue",
  },
  {
    name: "Green",
    value: "green",
  },
  {
    name: "Yellow",
    value: "yellow",
  },
  {
    name: "Black",
    value: "black",
  },
  {
    name: "White",
    value: "white",
  },
  {
    name: "Gray",
    value: "gray",
  },
  {
    name: "Brown",
    value: "brown",
  },
  {
    name: "Purple",
    value: "purple",
  },
  {
    name: "Pink",
    value: "pink",
  },
];

const SelectColor = (props: Props) => {
  return (
    <div className="">
      <Accordion type="single" defaultValue="colors" collapsible>
        <AccordionItem value="colors">
          <AccordionTrigger>{props?.attributeSet?.attributeSetName}</AccordionTrigger>
          <AccordionContent>
            {props?.attributeSet?.attributeSetValues?.map((item) => (
              <div className="py-1 flex gap-2 font-semibold" key={item._id}>
                <Checkbox
                  className={`w-5 h-5 data-[state=checked]:bg-secoundaryc border rounded-sm border-gray-300`}
                />
                <label htmlFor={item._id}>{item?.valueName}</label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SelectColor;

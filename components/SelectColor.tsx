import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "./ui/checkbox";

type Props = {};

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
          <AccordionTrigger>Filter by Color</AccordionTrigger>
          <AccordionContent>
            {colors.map((item, idx) => (
              <div className="py-1 flex gap-2 font-semibold" key={idx}>
                <Checkbox
                  className={`w-5 h-5 data-[state=checked]:bg-secoundaryc border rounded-sm border-gray-300`}
                />
                <label htmlFor={item.value}>{item.name}</label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SelectColor;

import React from "react";
import { Badge } from "./ui/badge";
import { Download, Star } from "lucide-react";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Button } from "./ui/button";

type Props = {
  product: {
    name: string;
    price: number;
    description: string;
    sizes: string[];
    colors: string[];
    rating: {
      stars: number;
      reviews: number;
    };
  };
};

const ProductDetails = ({ product }: Props) => {
  return (
    <div className="md:pr-10 py-5">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold font-sans">{product.name}</h2>
        <Badge className="rounded-md px-1 md:px-3 py-2 bg-[#11D600] bg-opacity-20 text-[#11D600] border border-[#11D600] hover:bg-">
          In Stock
        </Badge>
      </div>
      <div className="flex gap-1">
        {[...Array(Math.round(product.rating.stars))].map((_, i) => (
          <Star key={i} size={20} className="text-[#FFAD33]" fill="#FFAD33" />
        ))}
        <p className="text-gray-400 font-sans">
          ({product.rating.reviews} Reviews)
        </p>
      </div>
      <div className="py-2">
        <p className="text-xl font-bold">${product.price}</p>
      </div>
      <div className="py-3">
        <p className="font-sans">{product.description}</p>
      </div>
      <hr></hr>
      <div className="py-2 flex flex-col gap-1">
        <label className="font-medium">Colours: </label>
        <div className="flex gap-1">
          {product.colors.map((color, i) => (
            <div
              className="w-6 h-6 border rounded-sm hover:cursor-pointer"
              style={{ backgroundColor: color.toLowerCase() }}
            ></div>
          ))}
        </div>
      </div>
      <div className="py-2 flex flex-col gap-1">
        <label className="font-medium">Sizes: </label>
        <div className="flex gap-1">
          {product.sizes.map((size, i) => (
            <div className="w-7 h-7 border rounded-sm text-xs flex items-center justify-center hover:text-white hover:bg-secoundaryc hover:cursor-pointer font-medium">
              {size}
            </div>
          ))}
        </div>
      </div>
      <Button className="gap-2 px-7 py-6 bg-[#41469B] mt-3 font-sans">
        Get the App to Buy this item <Download size={18} />{" "}
      </Button>
    </div>
  );
};

export default ProductDetails;

'use client'

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

type CardProps = {
  product: any,
  variant?: any,
  days: any,
  hours: any,
  minutes: any
};

const ProductCard = ({ product , variant, days, hours, minutes}: CardProps) => {
  const router = useRouter()
  return (
    <div className="cursor-pointer rounded-lg overflow-hidden border border-gray-300" onClick={()=>router.push(`/product/${product?._id}`)}>
      <div className="relative flex items-center justify-center h-48 bg-backgroundc px-5 py-4">
        <Image
          src={product?.pro_input_image}
          alt="Oversized Jeans Jacket"
          className="object-cover"
          width={200}
          height={150}
        />
        {product?.discount && (
          <span className="absolute top-4 left-3 bg-secoundaryc text-white text-xs px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}
      </div>

      <div className="">
        {days && (
          <div
            className={`flex flex-col justify-center items-center text-white text-sm font-medium py-2 px-4 mb-4 ${
              days ? "bg-[#6469BE]" : "bg-secoundaryc"
            }`}
          >
            <div className="text-center flex gap-6 text-[10px] font-light">
              <div className="">Days</div>
              <div className="">Hours</div>
              <div className="">Minutes</div>
            </div>
            <div className="text-center flex gap-4 text-base font-bold">
              <div className="">{days}</div>
              <p>:</p>
              <div className="">{hours}</div>
              <p>:</p>
              <div className="">{minutes}</div>
            </div>
          </div>
        )}
        <div className="flex flex-col justify-between pt-2 md:pt-3">
          <h2 className="text-sm md:text-lg font-semibold mb-2 px-3">
            {product?.pro_input_name}
          </h2>

          <div className="flex items-center mb-2 px-3">
            {variant?.specialPrice ? (
              <>
                <span className="text-sm md:text-xl font-bold text-secoundaryc mr-2">
                  ${variant?.price - variant?.specialPrice}
                </span>
                <span className="text-xs md:text-sm text-gray-500 line-through font-semibold">
                  ${variant?.specialPrice}
                </span>
              </>
            ) : (
              <span className="text-sm md:text-xl font-bold text-secoundaryc">
                ${variant?.specialPrice}
              </span>
            )}
          </div>

          <div className="flex items-center px-3 pb-5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-[#FFAD33] fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <span className="text-sm text-gray-500 font-medium ml-2">
              ({5})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

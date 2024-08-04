"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Filter, X } from "lucide-react";
import ProductCategories from "./ProductCategories";

type Props = {};

const Filters = (props: Props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex justify-between w-full">
        <p className="text-2xl font-bold">Filter Products</p>
        <Button className="gap-2" onClick={() => setToggle(true)}>
          Filters
          <Filter />
        </Button>
      </div>
      {toggle && (
        <div className="fixed h-screen w-2/3 bg-white right-0 top-0 z-20 px-14 py-10 overflow-y-scroll">
          <div className="w-full flex justify-between">
            <p className="text-2xl font-semibold">Filter products</p>
            <X onClick={() => setToggle(false)} />
          </div>
          <div>
            <ProductCategories />
          </div>
        </div>
      )}
    </>
  );
};

export default Filters;

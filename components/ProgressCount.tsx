import React from "react";
import { Dot, Minus } from "lucide-react";

type Props = {
  count: number;
  current: number;
};

const ProgressCount = ({ count, current }: Props) => {
  return (
    <div className="flex gap-2 py-2 justify-center items-center pt-4">
      {Array(count)
        .fill(0)
        .map((_, index) => {
          if (current === index + 1) {
            return (
              <div className="h-2 w-14 bg-white rounded-full" key={index}>
                {" "}
              </div>
            );
          } else {
            return (
              <div className="h-2 w-2 bg-white rounded-full" key={index}>
                {" "}
              </div>
            );
          }
        })}
    </div>
  );
};

export default ProgressCount;

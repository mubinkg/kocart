import React from "react";

type Props = {
  text: string;
};

const HighlightCard = (props: Props) => {
  return (
    <div className="flex items-center gap-2 font-semibold h-6 px-5">
      <div className="w-3 h-full bg-secoundaryc rounded"></div>
      <p className="text-secoundaryc text-xl">{props.text}</p>
    </div>
  );
};

export default HighlightCard;

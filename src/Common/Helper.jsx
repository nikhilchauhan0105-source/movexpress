import { useState } from "react";
import { Minus, Plus } from "./Icons";

export const Heading = ({ head, subhead }) => {
  return (
    <div className="max-w-[898px] m-auto">
      <p className="text-center text-[1.9rem] lg:text-[3rem]">{head}</p>
      <p className="md:leading-7  text-center text-sm lg:text-[18px] md:mt-[18px]">
        {subhead}
      </p>
    </div>
  );
};

export const Faqs = ({ question, answer, index }) => {
  const [IsClicked, setIscliked] = useState(0);
  return (
    <div className="max-w-[637px] bg-white w-full border-1  border-black/20 md:px-[32px] p-4 md:py-[26px]   rounded-2xl ">
      <div className="flex justify-between ">
        <p className="md:text-[24px] ">{question}</p>
        <button
          onClick={() => setIscliked(IsClicked === index ? null : index)}
          className={`${IsClicked === index ? "hidden" : "block"}`}
        >
          <Plus />
        </button>
        <button
          onClick={() => setIscliked(null)}
          className={`${IsClicked === index ? "block" : "hidden"}`}
        >
          <Minus />
        </button>
      </div>

      <div
        className={` ${
          IsClicked ===  index ? "h-26" : "h-0"
        } overflow-hidden  transition-all  duration-300`}
      >
        <p className={`text-[#3D3F40] leading-[150%] mt-[32px]`}>{answer}</p>
      </div>
    </div>
  );
};

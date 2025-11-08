import { useState } from "react";
import { Minus, Plus, Upwardarrow } from "./Icons";

import { AppleLogo, PlayStore } from "./Icons";

export const Faqs = ({ question, answer, index }) => {
  const [IsClicked, setIscliked] = useState(0);
  return (
    <div
      data-aos="fade-down"
      className="max-w-[637px] bg-white w-full border-1  border-black/20 md:px-[32px] p-4 md:py-[26px]   rounded-2xl "
    >
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
          IsClicked === index ? "h-26" : "h-0"
        } overflow-hidden  transition-all  duration-300`}
      >
        <p className={`text-[#3D3F40] leading-[150%] mt-[32px]`}>{answer}</p>
      </div>
    </div>
  );
};

export const DividerLine = ({ text, maxwidth }) => {
  return (
    <div className="flex  items-center justify-between my-6">
      <div className={`h-[1px] w-full bg-purple ${maxwidth}`}></div>
      <h3 className="mx-4 text-xs leading-[164%] text-purple font-normal">
        {text}
      </h3>
      <div className={`h-[1px]  w-full bg-purple ${maxwidth}`}></div>
    </div>
  );
};

export const FormDescription = () => {
  return (
    <div className="max-w-[495px] h-fit sticky top-40 mt-8 mx-3 lg:mt-14 text-sm md:text-[18px] font-normal text-textlight">
      <div className="flex flex-col  text-center leading-[170%] gap-2 md:gap-5">
        <p>
          Earn as you drive The more you drive, the more you earn! You get paid
          weekly.
        </p>
        <p>
          Drive when you want, based on where you are, we simply provide the
          jobs.
        </p>
        <p>
          No more quoting or bidding for jobs-Movexpress offers transparent
          pricing with great rates of pay. The pay you see on the job alerts is
          the exact amount that will be paid into your account.
        </p>
      </div>
      <div className="mt-10 text-center">
        <p>Get the apps for a better experience</p>
        <div className="flex max-w-[406px] mt-6 m-auto justify-between">
          <AppleLogo />
          <PlayStore />
        </div>
      </div>
    </div>
  );
};

export const Topbutton = () => {
  const [visible, setVisible] = useState();

  window.addEventListener("scroll", () => {
    setVisible(window.scrollY);
  });
  return (
    <button
      onClick={() => window.scroll(0, 0)}
      className={` ${
        visible > 300 ? "flex" : "hidden"
      } p-2 lg:p-4 z-10 animate-bounce hover:bg-purple transition-all duration-200 rounded-full bg-orange fixed bottom-2 right-5 `}
    >
      <Upwardarrow />
    </button>
  );
};

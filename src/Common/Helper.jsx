import { useContext, useState } from "react";
import { Minus, Plus, Upwardarrow } from "./Icons";

import { AppleLogo, PlayStore } from "./Icons";
import { tabnoContext } from "../context/context";
import { ChevronRight } from "lucide-react";

export const Faqs = ({ question, answer, index }) => {
  const [IsClicked, setIscliked] = useState(0);
  return (
    <div
      onClick={() => setIscliked(IsClicked === index ? null : index)}
      data-aos="fade-down"
      className="max-w-[637px] bg-white w-full border-1  border-black/20 md:px-[32px] p-4 md:py-[26px]   rounded-2xl "
    >
      <div className="flex justify-between ">
        <p className="md:text-[24px] ">{question}</p>
        <button className={`${IsClicked === index ? "hidden" : "block"}`}>
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
      } p-2 lg:p-2 z-10 animate-bounce hover:bg-purple transition-all duration-200 rounded-full bg-orange fixed bottom-5 right-7 `}
    >
      <Upwardarrow />
    </button>
  );
};

export const PlacholderParagraph = ({ content, className }) => {
  return (
    <p
      className={`${className} text-violetprimary/50 font-inter text-sm md:text-base`}
    >
      {content}
    </p>
  );
};

export const ProgressBar = () => {
  const formtabno = useContext(tabnoContext);
  return (
    <div className="h-2 w-full bg-gray-300 rounded-2xl mt-[10px]">
      <div
        style={{ width: `calc(${formtabno} * 20%)` }}
        className=" bg-purple h-2 rounded-2xl"
      ></div>
    </div>
  );
};

export const AddItemsList = ({ item }) => {
  const [isopen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex text-sm  text-black/80 shadow-sm/10 font-semibold justify-between hover:bg-blue-300/10 hover:shadow-sm/30 rounded-xl p-3 "
      >
        <h3>{item}</h3>
        <span
          className={`${
            isopen ? "rotate-90" : "rotate-0"
          } transtion-all duration-300`}
        >
          <ChevronRight />
        </span>
      </div>
      <div
        className={`${
          isopen ? "block" : "hidden"
        }  transition-all duration-500  px-3 py-2 `}
      >
        <div className="flex justify-between text-xs items-center  bg-blue-50 rounded-lg p-2">
          <p>Large Clothes Storage Bag 90 Litres</p>
          <div className="flex gap-2  items-center">
            <button
              onClick={() => {
                setCount((prev) => (prev > 0 ? prev - 1 : 0)); 
              }}
            >
              <Minus size={5} />
            </button>
            {count}
            <button
              onClick={() => {
                setCount((prev) => prev + 1);
              }}
            >
              <Plus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

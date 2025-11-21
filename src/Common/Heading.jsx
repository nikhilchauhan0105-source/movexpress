import { useContext } from "react";
import { selectedvanContext, tabnoContext } from "../context/context";

export const Heading = ({ head, subhead }) => {
  return (
    <div className="max-w-[898px] px-3 m-auto">
      <p className="text-center text-[1.9rem] lg:text-[3rem]">{head}</p>
      <p className="md:leading-7  text-center text-sm lg:text-[18px] md:mt-[18px]">
        {subhead}
      </p>
    </div>
  );
};

export const PagesHeading = ({
  heading,
  subheading,
  button,
  calender,
  clock,
  date,
  time,
}) => {
  return (
    <div className="bg-purple px-3 flex flex-col items-center">
      <div className="max-w-[706px] text-white pt-8 pb-11 lg:pt-[116px] lg:pb-[161px] text-center m-auto">
        <div className="max-w-[328px] items-center w-full mb-6 justify-between text-white flex m-auto">
          <div className="group flex gap-1 items-center">
            {calender}
            <p>{date}</p>
          </div>
          <div className="flex gap-1">
            {clock}
            <p>{time}</p>
          </div>
        </div>
        <h1 className=" text-3xl lg:text-[64px] font-medium tracking-[-1px] ">
          {heading}
        </h1>
        <p className="mt-6 font-normal">{subheading}</p>
        {button}
      </div>
    </div>
  );
};

export const FormHeading = ({ head, subhead }) => {
  const formtabno = useContext(tabnoContext);
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className=" text-[25px] lg:text-[32px] ">{head}</p>
        <p className="text-sm md:text-base ">{subhead}</p>
      </div>
      <div className="max-w-fit bg-purple/10 p-2 px-6 rounded-3xl">
        <p className="text-[10px] md:text-[12px] text-purple font-semibold">
          {formtabno} of 5
        </p>
      </div>
    </div>
  );
};

export const FormSubHeading = ({ head, subhead }) => {
  return (
    <div className="mt-6">
      <div className="text-center mb-4">
        <h2 className="text-xl font-medium font-inter  mb-1">{head}</h2>
        <p className="text-sm font-light ">{subhead}</p>
      </div>
    </div>
  );
};

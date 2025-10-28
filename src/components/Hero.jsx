import { useState } from "react";
import {
  Greenstar,
  Halfstar,
  Info,
  Licensed,
  Location,
  Trust,
  Whitestar,
} from "../Common/Icons";

const Hero = () => {
  const [isTyped, setIsTyped]=useState("")
 
      const storeChange = (event) => {
        setIsTyped(event.target.value); 
      };
  console.log(isTyped)
  return (
    <section className=" bg-purple px-3 text-white">
      <div className="max-w-[1294px] flex-col pt-[25px] sm:pt-[10px] md:pt-[48px] xl:pt-[68px] items-center gap-2 lg:flex-row flex justify-between m-auto">
        <div className="max-w-[652px] sm:flex-row flex-col mb-[-22px]  lg:items-start lg:flex-col flex text-[32px] sm:text-[45px] md:text-[50px] lg:text-[60px] xl:text-[74px] font-bold">
          <div>
            <h1>Move Smart. </h1>
            <p>Move Easy. </p>
            <p>MoveXpress.</p>
            <p className="max-w-[406px] text-[14px] lg:text-lg font-normal leading-[150%]">
              Book reliable, stress-free removals across London today.
            </p>
          </div>
          <div className="text-base font-normal">
            <div className=" max-w-[422px] mt-[42px] flex">
              <div className="flex gap-[16px] max-w-[191px]">
                <Trust />
                <p className="text-[12px] sm:text-base">
                  Trusted across London
                </p>
              </div>
              <div className="flex gap-[16px] max-w-[191px]">
                <Licensed />
                <p className="text-[12px] sm:text-base">Licensed & Insured</p>
              </div>
            </div>
            <div className="md:max-w-[318px] w-full  mt-[30px] lg:mt-[82px] bg-orange px-[15px] lg:px-[31px] rounded-t-md py-[17px] ">
              <div>
                <div className="flex items-center gap-1 lg:pt-0  justify-center">
                  <Greenstar />
                  <p className="text-[25px] font-semibold lg:text-[40px]">Trustpilot</p>
                </div>

                <div className="flex gap-[4px] max-w-[150px] m-auto lg:max-w-[234px] my-[10px] justify-center">
                  <Whitestar />
                  <Whitestar />
                  <Whitestar />
                  <Whitestar />
                  <Halfstar />
                </div>
                <p className="text-[14px] lg:text-[20px] font-medium text-center">
                  Rated 4.9/5.0
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[644px] w-full  p-[10px]  md:p-[18px] lg:py-6 mb-1.5 lg:p-6 text-black bg-white rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[18px] md:text-[25px] lg:text-[32px] ">
                Where to?
              </p>
              <p className="text-sm md:text-base ">
                Tell us your pickup and destination
              </p>
            </div>
            <div className="max-w-fit bg-gray-100 p-2 rounded-3xl">
              <p className="text-[8px] md:text-[12px]">1. General Info</p>
            </div>
          </div>
          <div className="h-2 bg-gray-300 rounded-2xl mt-[10px]">
            <div className="max-w-[111px] w-full bg-purple h-2 rounded-2xl"></div>
          </div>
          <div className="mt-[21px]">
            <div className="flex flex-col gap-[4px]">
              <p className="font-semibold">Pickup Address</p>
              <div className="flex gap-[12px] py-3 md:py-[18px] px-2 md:px-[16px]  border-1 border-gray-200 rounded-xl">
                <Location />
                <input type="text" onChange={storeChange}  value={isTyped} placeholder="Enter pickup address" />
              </div>
            </div>
            <div className="flex flex-col gap-[4px] mt-[10px] lg:mt-[34px]">
              <p className="font-semibold">Pickup Address</p>
              <div className="flex gap-[12px] py-3 md:py-[18px] px-2 md:px-[16px]  border-1 border-gray-200 rounded-xl">
                <Location />
                <input type="text" onInputCapture={storeChange}  value={isTyped} placeholder="Enter pickup address" />
              </div>
            </div>

            <iframe
              className="w-full h-[180px] rounded-xl mt-[15px] lg:mt-[34px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111497.07331438884!2d75.67313700648043!3d29.15631570834024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d8011d0c37%3A0x1d3f0df105af1178!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1760597843244!5m2!1sen!2sin"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="text-green flex justify-between gap-2 items-center bg-green-500/10 mt-[12px] p-[12px] rounded-2xl">
              <Info />
              <div className="max-w-[495px] text-[12px] lg:text-base w-full">
                <p>Distance</p>
                <p>Between pickup and destination</p>
              </div>
              <p className="text-[12px] lg:text-base">1 miles</p>
            </div>
            <button className="cursor-pointer mt-[32px] bg-orange rounded-2xl w-full text-center border-b-2 text-white border-black/20 p-[17px]">
              Show Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

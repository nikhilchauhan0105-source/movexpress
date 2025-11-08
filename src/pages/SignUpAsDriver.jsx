import { useState } from "react";
import FormButton from "../Common/FormButton";
import { FormDescription, Topbutton } from "../Common/Helper";
import Navbar from "../Common/Navbar";
import UploadSlideCard from "../Common/UploadSlideCard";
import useSignUp from "../hooks/useSignUp";

const SignUpAsDriver = () => {
  const {
    nameTyped,
    storename,
    surnameTyped,
    storesurname,
    numberTyped,
    storenumber,
    emailTyped,
    storeemail,
    dateTyped,
    storedate,
    languageTyped,
    storelanguage,
    addressTyped,
    storeaddress,
    postcodeTyped,
    storepostcode,
  } = useSignUp();

  return (
    <>
      <div className="bg-purple">
        <Navbar />
      </div>
      <div className=" overflow-hidden  w-full bg-[url(./src/assets/images/Signupbg.png)] bg-no-repeat bg-center -mt-80 bg-fit h-[450px] md:h-[450px]  lg:h-[650px] "></div>
      <div className="max-w-[1296px]  items-center lg:items-start  xl:flex-row flex flex-col justify-between mb-34  m-auto">
        <div className="max-w-[745px] z-5 -mt-15  lg:-mt-52 xl:p-12 p-4 mx-3 bg-white ">
          <div className="flex  justify-between flex-col   gap-3 lg:flex-row  items-start">
            <div className="max-w-[501px]">
              <h1 className="text-2xl lg:text-5xl text-purple font-semibold">
                Sign Up as a Driver
              </h1>
              <p className="text-fadepurple leading-[160%]  my-4">
                Get paid in 7days!!! Payments direct to your account.
              </p>
            </div>
            <div className="max-w-fit bg-gray-100 p-2 rounded-3xl">
              <p className="text-[8px] md:text-[12px]">1. Personal Info</p>
            </div>
          </div>
          <div className="h-2 max-w-[654px] w-full rounded-2xl bg-lightpink my-8 ">
            <div className="rounded-2xl w-[30%] h-full bg-purple"></div>
          </div>
          <div className="flex   flex-wrap max-w-[649px] mt-4 gap-x-4 gap-y-6  m-auto">
            <div className="flex   flex-col gap-y-1 w-full lg:max-w-[316px]   ">
              <label className="text-purple leading-6  sm:text-base font-medium">
                First name *
              </label>
              <input
                type="text"
                value={nameTyped}
                onChange={storename}
                placeholder="enter your name"
                className=" p-2 md:p-4 border-1  w-full  border-purple rounded-[8px]"
              />
            </div>
            <div className="flex   flex-col gap-y-1 w-full lg:max-w-[316px]   ">
              <label className="text-purple leading-6  sm:text-base font-medium">
                Surname *
              </label>
              <input
                value={surnameTyped}
                onChange={storesurname}
                type="text"
                className=" p-2 md:p-4 border-1  w-full  border-purple rounded-[8px]"
              />
            </div>
            <div className="flex   flex-col gap-y-1 w-full lg:max-w-[316px]   ">
              <label className="text-purple leading-6  sm:text-base font-medium">
                Phone No *
              </label>
              <input
                value={numberTyped}
                onChange={storenumber}
                type="number"
                className=" p-2 md:p-4 border-1  w-full  border-purple rounded-[8px]"
              />
            </div>
            <div className="flex   flex-col gap-y-1 w-full lg:max-w-[316px]   ">
              <label className="text-purple leading-6  sm:text-base font-medium">
                E-mail *
              </label>
              <input
                value={emailTyped}
                onChange={storeemail}
                type="email"
                placeholder="enter your name"
                className=" p-2 md:p-4 border-1  w-full  border-purple rounded-[8px]"
              />
            </div>
            <div className="flex   flex-col gap-y-1 w-full lg:max-w-[316px]   ">
              <label className="text-purple leading-6  sm:text-base font-medium">
                Date of Birth *
              </label>
              <input
                value={dateTyped}
                onChange={storedate}
                type="date"
                placeholder="enter your name"
                className=" p-2 md:p-4 border-1  w-full  border-purple rounded-[8px]"
              />
            </div>
            <div className="flex   flex-col gap-y-1 w-full lg:max-w-[316px]   ">
              <label className="text-purple leading-6  sm:text-base font-medium">
                Language of preference in english *
              </label>

              <input
                id="language"
                value={languageTyped}
                onChange={storelanguage}
                type="text"
                className=" p-2 md:p-4 border-1  w-full  border-purple rounded-[8px]"
              />
            </div>
            <div className="flex   flex-col gap-y-1 w-full lg:max-w-[316px]   ">
              <label className="text-purple leading-6  sm:text-base font-medium">
                Address *
              </label>
              <input
                value={addressTyped}
                onChange={storeaddress}
                type="text"
                className=" p-2 md:p-4 border-1  w-full  border-purple rounded-[8px]"
              />
            </div>
            <div className="flex   flex-col gap-y-1 w-full lg:max-w-[316px]   ">
              <label className="text-purple leading-6  sm:text-base font-medium">
                Postcode *
              </label>
              <input
                value={postcodeTyped}
                onChange={storepostcode}
                type="number"
                placeholder="enter your name"
                className=" p-2 md:p-4 border-1  w-full  border-purple rounded-[8px]"
              />
            </div>
          </div>
          <p className=" text-purple font-medium leading-6 mt-6">
            Do you have any previous criminal convictions? *
          </p>
          <div className="flex gap-14 mt-3 mb-6">
            <input
              type="radio"
              name="criminal"
              className=" border-2 h-5 w-5 border-purple  rounded-2xl"
            ></input>
            yes
            <input
              type="radio"
              name="criminal"
              className=" border-2 h-5 w-5 border-purple  rounded-2xl"
            ></input>
            no
          </div>
          <UploadSlideCard
            width="w-full"
            height="h-[187px]"
            label="Photo of your selfie *"
          />
          <FormButton text="Next" url="/VechcleInfo" />
        </div>
        <FormDescription />
        <Topbutton />
      </div>
    </>
  );
};

export default SignUpAsDriver;

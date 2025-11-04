import { signupinputdeatails } from "../Common/Data";
import DividerLine from "../Common/DividerLine";
import FormButton from "../Common/FormButton";
import FormDescription from "../Common/FormDescription";
import UploadSlideCard from "../Common/UploadSlideCard";
import Input from "../components/Input";

const NextFormPage = () => {
  return (
    <>
      <div className=" -z-1 w-full bg-[url(./src/assets/images/Signupbg.png)] bg-no-repeat bg-center -mt-80 bg-fit h-[450px] md:h-[450px]  lg:h-[650px] "></div>
      <div className="max-w-[1296px] items-center xl:items-start px-3  xl:flex-row flex flex-col justify-between mb-34  m-auto">
        <div className="max-w-[750px] w-full z-5 -mt-15  xl:-mt-52 xl:p-12 p-4 xl:mx-3  bg-white ">
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
              <p className="text-[8px] md:text-[12px]">1. General Info</p>
            </div>
          </div>
          <div className="h-2 max-w-[654px] w-full rounded-2xl bg-lightpink my-8 ">
            <div className="rounded-2xl w-[30%] h-full bg-purple"></div>
          </div>
          <div className="flex  flex-wrap justify-between  lg:flex-nowrap max-w-[649px] mt-4 gap-x-4 gap-y-6  m-auto">
            <div className="flex flex-col w-full gap-6">
              <Input label="Vechicle type" placeholder="Select Vehicle type " />
              <UploadSlideCard
                label="Front Of Driving Licence *"
                width=" w-full xl:max-w-[316px]"
                height="h-[124px]"
              />
            </div>
            <div className="flex  w-full flex-col gap-6">
              <Input
                label="Vehicle registration no *"
                placeholder="Enter vehicle registration no"
              />
              <UploadSlideCard
                label="Back Of Driving Licence *"
                width="w-full xl:max-w-[316px]"
                height="h-[124px]"
              />
            </div>
          </div>
          <DividerLine maxwidth="max-w-[270px]" text="Van Insurance" />
          <div>
            <UploadSlideCard label="Van Insurance Copy *" height="h-[124px]" />
          </div>
          <div className="flex flex-wrap gap-3 lg:gap-0 justify-between mt-5">
            <Input label="Start Date *" type="date" />
            <Input label="End Date *" type="date" />
          </div>
          <DividerLine
            maxwidth="max-w-[235px]"
            text="Goods In Transit Insurance"
          />

          <UploadSlideCard
            width="w-full"
            height="h-[124px]"
            label="Goods In Transit Insurance Copy *"
          />
          <div className="flex flex-wrap gap-3 lg:gap-0 justify-between mt-5">
            <Input label="Start Date *" type="date" />
            <Input label="End Date *" type="date" />
          </div>
          <DividerLine
            text="Public Liability Insurance"
            maxwidth="max-w-[241px]"
          />

          <UploadSlideCard
            width="w-full"
            height="h-[124px]"
            label="Public Liability Insurance"
          />
          <div className="flex flex-wrap gap-3 lg:gap-0 justify-between mt-5">
            <Input label="Start Date *" type="date" />
            <Input label="End Date *" type="date" />
          </div>
          <div className="flex  mt-6 gap-4 max-w-[608px]">
            <input type="checkbox" className="h-5 w-5" />
            <p className="text-purple/70 text-sm leading-5">
              By clicking the submit button, I agree that I have read and
              understood the Terms And Conditions.
            </p>
          </div>
          <FormButton text="Submit Application" />
        </div>
        <FormDescription />
      </div>
    </>
  );
}

export default NextFormPage
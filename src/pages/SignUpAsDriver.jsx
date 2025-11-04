import signupbg from "../assets/images/Signupbg.png";
import { signupinputdeatails } from "../Common/Data";
import FormButton from "../Common/FormButton";
import FormDescription from "../Common/FormDescription";
import UploadSlideCard from "../Common/UploadSlideCard";
import Input from "../components/Input";

const SignUpAsDriver = () => {
  return (
    <>
      <div className=" -z-1 w-full bg-[url(./src/assets/images/Signupbg.png)] bg-no-repeat bg-center -mt-80 bg-fit h-[450px] md:h-[450px]  lg:h-[650px] "></div>
      <div className="max-w-[1296px]   xl:flex-row flex flex-col justify-between mb-34  m-auto">
        <div className="max-w-[745px] z-5 -mt-15  md:-mt-52 xl:p-12 p-4 mx-3 bg-white ">
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
          <div className="flex  flex-wrap max-w-[649px] mt-4 gap-x-4 gap-y-6  m-auto">
            {signupinputdeatails.map((items, index) => (
              <Input type={items.type} label={items.lable} key={index} />
            ))}
          </div>
          <p className=" text-purple font-medium leading-6 mt-6">
            Do you have any previous criminal convictions? *{" "}
          </p>
          <div className="flex gap-14 mt-3 mb-6">
            <input
              type="checkbox"
              name="criminal"
              className=" border-2 h-5 w-5 border-purple  rounded-2xl"
            ></input>
            <input
              type="checkbox"
              name="criminal"
              className=" border-2 h-5 w-5 border-purple  rounded-2xl"
            ></input>
          </div>
          <UploadSlideCard
            width="w-full"
            height="h-[187px]"
            label="Photo of your selfie *"
          />
          <FormButton text="Next"
          url="/nextpage" />
        </div>
        <FormDescription />
      </div>
    </>
  );
};

export default SignUpAsDriver;

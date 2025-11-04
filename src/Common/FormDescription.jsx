import { AppleLogo, PlayStore } from "./Icons";


const FormDescription = () => {
  return (
    <div className="max-w-[495px] h-fit sticky top-20 mt-8 mx-3 lg:mt-14 text-sm md:text-[18px] font-normal text-textlight">
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
}

export default FormDescription
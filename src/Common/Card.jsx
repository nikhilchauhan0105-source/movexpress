import { Rightarrow } from "../Icons";

export const Card = ({ icon, head, subhead }) => {
  return (
    <div className="group  ">
      <div className="flex justify-between mb-[24px] ">
        <span className="group-hover:translate-x-[20px] duration-300 transition-all">
          {icon}
        </span>

        <span
          className={`group-hover:rotate-[45deg] duration-300 h-fit transition-all `}
        >
          <Rightarrow />
        </span>
      </div>
      <p className="text-[20px] mb-3 font-semibold ">{head}</p>
      <p className="leading-7 text-black/60">{subhead}</p>
    </div>
  );
};

export const Workcard = ({ icon, steps, head, subhead }) => {
  return (
    <div className="p-[24px] transition-all duration-500 cursor-pointer group hover:bg-purple hover:text-white text-center flex flex-col items-center rounded-xl bg-[#F6F7F9]">
      <span className="mb-[24px]">{icon}</span>
      <p className="group-hover:text-white text-[#6D6969]">{steps}</p>
      <div className="px-[40px]">
        <p className="text-[20px] font-semibold">{head}</p>
        <p className="mt-[12px] leading-6">{subhead}</p>
      </div>
    </div>
  );
};

export const Trustcard = ({ icon, head, subhead }) => {
  return (
    <div className="md:max-w-[300px] w-full p-[30px] flex flex-col gap-[18px] hover:shadow-lg   transition-all duration-300 cursor-pointer group bg-white text-center flex flex-col items-center rounded-xl bg-[#F6F7F9]">
      <span className="mb-[24px] group-hover:scale-[1.1] transition-all duration-300 ease-in-out">{icon}</span>
        <p className=" text-[25px] lg:text-[32px] leading-[125%] max-w-[240px] text-purple font-semibold ">{head}</p>
        <p className=" leading-6">{subhead}</p>
      
    </div>
  );
};

export const Customercard=(img,name,role,rating,text)=>{
  return(
    <div>
      <span></span>
    </div>
  )
}

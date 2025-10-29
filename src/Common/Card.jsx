import { Arrow, Rightarrow, Star } from "./Icons";

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
      <h2 className="text-[20px] mb-3 font-semibold ">{head}</h2>
      <h3 className="leading-7 text-black/60">{subhead}</h3>
    </div>
  );
};

export const Workcard = ({ icon, steps, head, subhead }) => {
  return (
    <div className="p-[24px] transition-all duration-200 h-[265px] cursor-pointer group hover:bg-purple hover:text-white text-center flex flex-col items-center rounded-xl bg-[#F6F7F9]">
      <span className="mb-[24px]">{icon}</span>
      <h3 className="group-hover:text-white text-[#6D6969]">{steps}</h3>
      <div className="px-[40px]">
        <h2 className="text-xl font-semibold">{head}</h2>
        <h3 className="mt-[12px] font-light leading-6">{subhead}</h3>
      </div>
    </div>
  );
};

export const Trustcard = ({ icon, head, subhead }) => {
  return (
    <div className="md:max-w-[300px] w-full px-[33px] py-8 flex flex-col gap-[18px] hover:shadow-lg   transition-all duration-300 cursor-pointer group bg-white text-center  items-center rounded-xl ">
      <span className="mb-lg group-hover:scale-[1.1] transition-all duration-300 ease-in-out">
        {icon}
      </span>
      <p className=" text-[25px] lg:text-[32px] leading-[125%] max-w-[240px] text-purple font-semibold ">
        {head}
      </p>
      <p className="leading-6">{subhead}</p>
    </div>
  );
};

export const Customercard = ({ img, name, role, text, className }) => {
  return (
    <div className="flex flex-col hover:shadow-lg  max-w-[413px] items-center w-full p-5  md:p-[32px] rounded-2xl bg-secondry ">
      <span
        className={`${className} max-w-fit pt-1 w-full  overflow-hidden grid place-items-center  rounded-full `}
      >
        {img}
      </span>
      <div className="max-w-[133px] py-[24px]  text-center">
        <h2 className="text-sm">{name}</h2>
        <h2>{role}</h2>
        <div className="flex justify-center mt-[14px] gap-1">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
      <p className="max-w-[349px] text-base lg:text-xl font-semibold italic text-center ">
        {text}
      </p>
    </div>
  );
};

export const BlogsSectioncard = ({ image, head, text }) => {
  return (
    <div data-aos="fade-up" className="max-w-[415px] ">
      <div className="max-w-[415px] ">
        <img className="w-full rounded-2xl" src={image} alt="card images" />
      </div>
      <div className="flex flex-col gap-[16px] my-2.5 md:my-[24px] ">
        <p className=" text-base md:text-[24px] ">{head}</p>
        <p className="text-sm md:text-[18px] max-w-[379px]">{text}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-purple font-semibold cursor-pointer">learn more</p>
        <Arrow />
      </div>
    </div>
  );
};

export const AboutCard =({icon ,head,text,maxwidth ,textwidth})=>{
  return (
    <div
      className={` ${maxwidth} w-full flex flex-col items-center p-6 rounded-3xl bg-secondry`}
    >
      <span className="mb-3">{icon}</span>
      <h2 className="my-3 text-xl font-semibold">{head}</h2>
      <p className={`${textwidth} text-center leading-[170%] text-black/60`}>
        {text}
      </p>
    </div>
  );
}


export const Loopline=(text)=>{
  return(
    <p className="text-2xl text-white">{text}</p>
  )
}
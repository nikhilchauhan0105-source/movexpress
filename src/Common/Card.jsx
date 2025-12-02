import { Circle, Dot, X } from "lucide-react";
import { Arrow, Rightarrow, Star } from "./Icons";
import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import { informationContext, selectedvanContext } from "../context/context";

export const Card = ({ icon, head, subhead, url}) => {
  const navigate = useNavigate();
  return (
    <div className="group"  onClick={() => navigate("manvanservices")}>
      <div className="flex justify-between mb-[24px] ">
        <span className="group-hover:translate-x-[20px] duration-300 transition-all">
          {icon}
        </span>
        <a href={url}>
          <span
            className={`group-hover:rotate-[45deg] duration-300 h-fit transition-all `}
          >
            <Rightarrow />
          </span>
        </a>
      </div>
      <h2 className="text-[20px] mb-3 font-semibold ">{head}</h2>
      <h3 className="leading-7 text-black/60">{subhead}</h3>
    </div>
  );
};

export const Workcard = ({ icon, steps, head, subhead }) => {
  return (
    <div data-aos="zoom-in" className="workcardstyle group">
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
    <div data-aos="fade-right" className="trustcardstyle group ">
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
    <div data-aos="zoom-in" className="customercardstyle">
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

export const BlogsSectioncard = ({ image, head, text, slug }) => {
  return (
    <div className="max-w-[415px] m-auto ">
      <div className="max-w-[415px] ">
        <img className="w-full rounded-2xl" src={image} alt="card images" />
      </div>
      <div className="flex flex-col gap-[16px] my-2.5 md:my-[24px] ">
        <p className=" text-base md:text-[24px] ">{head}</p>
        <p className="text-sm md:text-[18px] max-w-[379px]">{text}</p>
      </div>
      <Link to={`/blogs/${slug}`} className="flex items-center gap-4">
        <p className="text-purple font-semibold cursor-pointer">learn more</p>
        <Arrow />
      </Link>
    </div>
  );
};

export const AboutCard = ({ icon, head, text, maxwidth, textwidth }) => {
  return (
    <div
      data-aos="zoom-in"
      className={` ${maxwidth} w-full flex flex-col items-center p-6 rounded-3xl bg-secondry`}
    >
      <span className="mb-3">{icon}</span>
      <h2 className="my-3 text-xl font-semibold">{head}</h2>
      <p className={`${textwidth} text-center leading-[170%] text-black/60`}>
        {text}
      </p>
    </div>
  );
};

export const Loopline = ({ text }) => {
  return <p className=" xl:text-2xl text-white mr-25">{text}</p>;
};

export const WhyChooseOurServicesCard = ({ head, text, icon }) => {
  return (
    <div className="w-full md:max-w-[239px] flex flex-col items-center text-center p-6 bg-secondry rounded-2xl">
      {icon}
      <h2 className="text-xl font-semibold mb-2">{head}</h2>
      <p className="text-textlight ">{text}</p>
    </div>
  );
};

export const IncludeServices = ({ icon, head, text }) => {
  return (
    <div className="w-full md:max-w-[308px] p-6 bg-white rounded-2xl">
      {icon}
      <h2 className="mt-6 mb-3 text-xl font-semibold leading-[160%]">{head}</h2>
      <p>{text}</p>
    </div>
  );
};

export const MakeABookingCard = ({ head, subhead, subheadwidth }) => {
  return (
    <div className="p-6 bg-secondry rounded-2xl max-w-[352px]  w-full">
      <h3 className="text-xl font-semibold">{head}</h3>
      <p className={`${subheadwidth} text-textlight mt-3`}>{subhead}</p>
    </div>
  );
};

export const FinalSelectedItemsCard = ({ onClick }) => {
  const { vanvalue } = useContext(informationContext);
  const {
    isTyped,
    isDestinationTyped,
    loadingunloadingTime,
    startDate,
    startTime,
    quantities,
  } = useContext(informationContext);
  return (
    <div className="w-full fixed top-0 h-screen px-3 z-10 bg-white/10 backdrop-blur-3xl">
      <div className="relative top-[50%] left-[50%] flex flex-col gap-5 p-3 px-4 -translate-[50%] bg-white max-w-[500px] w-full   rounded-2xl">
        <button
          type="button"
          className="bg-orange top-1.5 right-1.5 md:-top-6 md:-right-6 absolute p-1 hover:bg-purple rounded-lg "
          onClick={onClick}
        >
          <X
            size={20}
            className="cursor-pointer text-lightpink transition-all duration-300 ease-in-out top-3 right-3"
          />
        </button>
        <div className="text-black font-inter flex flex-col gap-2">
          <h2 className="text-2xl font-medium">Selcted Information</h2>
          <div className="text-sm bg-slate-300 p-2 rounded-xl ">
            <h3 className="text-xl">where to ?</h3>
            <div className="pl-2 font-medium ">
              <p>
                Pickup Address : <span className="font-normal">{isTyped}</span>
              </p>
              <p>
                Destination Address :
                <span className="font-normal"> {isDestinationTyped}</span>
              </p>
            </div>
          </div>
          <div className="text-sm  font-inter bg-slate-300 p-2 rounded-xl">
            <h3 className="text-xl">Choosen Van</h3>
            <p className="pl-2 font-medium">
              Selected Van : <span className="font-normal">{vanvalue}</span>
            </p>
          </div>
          <div className="text-sm bg-slate-300 p-2 rounded-xl ">
            <h3 className="text-xl">when</h3>
            <div className="pl-2 font-medium">
              <p>
                Loading & Unloading time :{" "}
                <span className="font-normal">{loadingunloadingTime}</span>
              </p>
              <p>
                Moving Date : <span className="font-normal">{startDate}</span>
              </p>
              <p>
                {" "}
                Moving Time : <span className="font-normal">{startTime}</span>
              </p>
            </div>
          </div>
          <div className="text-sm bg-slate-300 p-2 rounded-xl">
            <h3 className="text-xl">what's moving ?</h3>
            <div className="pl-2 ">
              <h4 className="text-[17px] font-medium">Add items</h4>
              <div className="max-h-[200px] py-1 overflow-y-scroll custom-scrollbar">
                {Object.keys(quantities).map((category) => (
                  <div
                    className="bg-slate-200 my-1 p-1 px-2 rounded-lg"
                    key={category}
                  >
                    <p className="font-medium">{category}</p>
                    {Object.keys(quantities[category]).map((item) => (
                      <div className="flex justify-between pr-3">
                        <p className="text-textlight pl-2" key={item}>
                          {item}
                        </p>
                        <span className="text-[7px] sm:text-xs   ">
                          {quantities[category][item]}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

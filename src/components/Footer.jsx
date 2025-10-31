import logo from "../assets/images/movexpress-logo.png";
import { quicklinklist, smallprint } from "../Common/Data";
import { Chat, Facebook, Instagram, X } from "../Common/Icons";

export const Footer = () => {
  return (
    <footer className="bg-lightpurple px-3">
      <div className="lg:flex-row flex-col lg:items-start  flex gap-2 lg:gap-8 justify-between  max-w-[1296px] pt-10 lg:pt-32 m-auto">
        <div className="max-w-[428px]">
          <div className="max-w-[285px] gap-[8px] items-center flex">
            <img
              className="max-w-[40px] md:max-w-[50px] lg:max-w-[70px] lg:max-h-[51px]"
              src={logo}
              alt="logo image"
            />
            <div className="text-purple">
              <p className=" md:text-[20px] lg:text-[43px] font-extrabold italic  md:leading-6 leading-4 lg:leading-8">
                MOVEXPRESS
              </p>
              <p className="text-[12px] lg:text-xl italic">
                Expressly Delivered
              </p>
            </div>
          </div>
          <p className="font-normal max-w-[390px] text-sm text-black/80 lg:text-lg mt-2 lg:mt-7">
            At MoveXpress we understand that moving can be quite demanding and
            stressful.That's why we are dedicated to make the process smooth and
            seamless for you.
          </p>

          <div className="flex gap-4 my-5 lg:my-10">
            <Facebook />
            <Instagram />
            <X />
          </div>
        </div>
        <div className="flex lg:flex-row  lg:flex-nowrap flex-wrap gap-5 lg:gap-[72px]">
          <ul className="flex flex-col gap-1 lg:gap-1.5">
            <h2 className=" text-lg md:text-xl font-medium  md:mb-3 text-purple">Quick Link</h2>
            {quicklinklist.map((link, index) => (
              <li 
                key={index}
                className="text-sm  md:text-base lg:text-lg font-medium"
              >
                <a href={link.url}> {link.name}</a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-1 lg:gap-1.5">
            <h2 className="text-lg md:text-xl font-semibold md:mb-3 text-purple">
              Small Print
            </h2>
            {smallprint.map((link, index) => (
              <li
                key={index}
                className=" text-sm md:text-base lg:text-lg font-medium"
              >
                <a href=""> {link}</a>
              </li>
            ))}
          </ul>

          <div className="max-w-[180px]">
            <h2 className="text-lg md:text-xl font-semibold md:mb-3 text-purple">
              Contact Info
            </h2>
            <div className=" lg:my-3 font-medium">
              <p className=" text-xs md:text-base lg:text-lg">
                6566 Union Street, San Francisco CA 65456, United States
              </p>
              <p className="text-xs md:text-base lg:text-lg ">(555) 123-4567</p>
            </div>

            <button className="cursor-pointer mt-6 gap-1.5 flex bg-orange py-[10px] px-[20px] lg:py-[17px] lg:px-5 rounded-xl max-w-fit text-white  font-semibold">
              Chat with us <Chat />
            </button>
          </div>
        </div>
      </div>
      <div className=" text-xs lg:text-base border-t-1 text-purple border-purple py-2.5 lg:py-10 max-w-[1295px] m-auto mt-5 lg:mt-32">
        <p>© Copyright 2024, All Rights Reserved by MoveXpress.</p>
      </div>
    </footer>
  );
};

export default Footer;

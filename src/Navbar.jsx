import logo from "./assets/images/movexpress-logo.png";
import { Cross } from "./Icons";
import { useState } from "react";
import { MenuIcon } from "./Icons";
import { Navlist } from "./Common/Helper";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isactive, setactive] = useState(false);

  return (
    <section className=" w-full bg-purple">
      <div className="max-w-[1294px]  justify-between px-2 py-2 lg:py-[18px] m-auto flex">
        <div className="max-w-[285px] gap-[8px] items-center flex">
          <img
            className="max-w-[40px] md:max-w-[50px] lg:max-w-[70px] lg:max-h-[51px]"
            src={logo}
            alt="logo image"
          />
          <div className="text-white ">
            <p className="text-base md:text-[20px] lg:text-[32px] font-bold italic  md:leading-6 leading-4 lg:leading-8">
              MOVEXPRESS
            </p>
            <p className="text-[12px] lg:text-[14px] italic">
              Expressly Delivered
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#F6C8F6] p-[6px] lg:p-[12px] rounded-md lg:rounded-xl"
        >
          <MenuIcon />
        </button>
      </div>
      <div
        className={` fixed top-0 block  py-3 flex  flex-col duration-500 transition-all h-screen w-full  m-auto backdrop-blur-xs  px-2 bg-lightpink   ${
          isOpen ? "top-0" : "top-[-150%]"
        } `}
      >
        <div className="max-w-[1294px] mx-auto items-center w-full  justify-between px-2 py-2  flex">
          <div className="max-w-[285px] gap-[8px] items-center flex">
            <img
              className="max-w-[40px] md:max-w-[50px] lg:max-w-[70px] lg:max-h-[51px]"
              src={logo}
              alt="logo image"
            />
            <div className="text-purple">
              <p className="text-base md:text-[20px] lg:text-[32px] font-bold italic  md:leading-6 leading-4 lg:leading-8">
                MOVEXPRESS
              </p>
              <p className="text-[12px] lg:text-[14px] italic">
                Expressly Delivered
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 transition-all  ease-out rounded-xl bg-purple  ml-auto"
          >
            <Cross />
          </button>
        </div>

        <ul className="pl-2  text-center  text-purple text-[4rem] mt-20 font-semibold flex flex-col gap-1 ">
          {Navlist.map((list, index) => {
            return (
              <li key={index}>
                <a
                  onClick={(() => setactive(true), () => setIsOpen(false))}
                  className={`${isactive ? "underline" : null}`}
                  key={index}
                  href={list.url}
                >
                  {list.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="h-[1.5px] bg-white/10 w-full"></div>
    </section>
  );
};

export default Navbar;

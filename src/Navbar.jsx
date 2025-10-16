import logo from "./assets/images/movexpress-logo.png";
import { Cross } from "./Icons";
import { useState } from "react";
import { MenuIcon } from "./Icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <p className="text-[12px] lg:text-base">Expressly Delivered</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#F6C8F6] p-[6px] lg:p-[12px] rounded-xl lg:rounded-2xl"
        >
          <MenuIcon />
        </button>
      </div>
      <div
        className={` fixed top-0 block rounded-xl py-3 flex flex-col duration-500 transition-all h-screen max-w-[400px] w-full m-auto backdrop-blur-xs  px-2 bg-white/40   ${
          isOpen ? "right-0" : "right-[-150%]"
        } `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 transition-all ease-out rounded-md hover:bg-red-500  ml-auto"
        >
          <Cross />
        </button>
        <ul className="pl-2 text-center flex flex-col gap-2 ">
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#work">Our work</a>
          </li>
          <li>
            <a href="#customer">Customer</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </div>
      <div className="h-[1px] bg-white/30 w-full">

      </div>
    </section>
  );
};

export default Navbar;

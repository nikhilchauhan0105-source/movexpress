import { useState } from "react";
import logo from "../assets/images/movexpress-logo.png";
import { navlist } from "./Data";
import { Cross, MenuIcon } from "./Icons";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  


  return (
    <nav className=" w-full z-6 sticky top-0 bg-purple">
      <div className="max-w-[1294px]  justify-between items-center px-2 py-2 lg:py-[18px] m-auto flex">
        <Link to="/">
          <div className="max-w-[285px] gap-[8px] items-center flex">
            <button>
              <img
                className="max-w-[40px] md:max-w-[50px] lg:max-w-[70px] lg:max-h-[51px]"
                src={logo}
                alt="logo image"
              />
            </button>

            <div className="text-white ">
              <p className="text-base md:text-[20px] lg:text-[32px] font-bold italic  md:leading-6 leading-4 lg:leading-8">
                MOVEXPRESS
              </p>
              <p className="text-[12px] lg:text-[14px] italic">
                Expressly Delivered
              </p>
            </div>
          </div>
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#F6C8F6] p-[6px] lg:p-3 rounded-md lg:rounded-xl"
        >
          <MenuIcon />
        </button>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={` fixed top-0   py-3 flex  z-3 flex-col duration-500 transition-all h-screen w-full m-auto backdrop-blur-xs  px-2 bg-lightpink   ${
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
            className="p-1 py-1.5 md:p-2 transition-all  ease-out rounded-xl bg-purple  ml-auto"
          >
            <Cross />
          </button>
        </div>

        <ul className="pl-2  text-center  text-purple text-4xl md:text-[3.5rem] mt-15 font-semibold flex flex-col gap-4 ">
          {navlist.map((list, index) => (
            <li key={index}>
              <Link
                to={list.url}
                className="hover:text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-[1px] bg-white/10 w-full"></div>
      <div className="flex flex-col items-center gap-1 absolute top-4 right-4">
        <div className="w-10 h-10 rounded-full bg-white"></div>
        <button
          onClick={() => {
            sessionStorage.removeItem("isAdmin");
            setIsAdmin(false);
          }}
          className="bg-[#F6C8F6] text-purple text-xs cursor-pointer  right-4 p-1  rounded-md "
        >
          logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

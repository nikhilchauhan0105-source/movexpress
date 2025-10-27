import logo from "../assets/images/movexpress-logo.png";
import { Button } from "../Common/Button";
import { quicklinklist, smallprint } from "../Common/Data";
import { Facebook, Instagram, X } from "../Common/Icons";

export const Footer = () => {
  return (
    <footer className="bg-lightpurple">
      <div className="flex gap-20 max-w-[1296px] pt-32 m-auto">
        <div className="max-w-[428px]">
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
          <p className="text-lg mt-7">
            At MoveXpress we understand that moving can be quite demanding and
            stressful.That's why we are dedicated to make the process smooth and
            seamless for you.
          </p>

          <div className="flex gap-4 my-10">
            <Facebook />
            <Instagram />
            <X />
          </div>
        </div>
        <div className="flex gap-17">
          <ul className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-purple">Quick Link</h2>
            {quicklinklist.map((link, index) => (
              <li key={index} className="text-lg font-semibold">
                <a href=""> {link}</a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-purple">Small Print</h2>
            {smallprint.map((link, index) => (
              <li key={index} className="text-lg font-semibold">
                <a href=""> {link}</a>
              </li>
            ))}
          </ul>

          <div className="max-w-[217px]">
            <h2 className="text-xl font-semibold text-purple">Contact Info</h2>
            <div className="my-6">
              <p className="text-lg font-semibold">
                6566 Union Street, San Francisco CA 65456, United States
              </p>
              <p className="text-lg font-semibold">(555) 123-4567</p>
            </div>
            <Button text="Chat with Us" />
          </div>
        </div>
      </div>
      <div className="border-t-1 border-purple py-10 max-w-[1295px] m-auto mt-32">
        <p>© Copyright 2024, All Rights Reserved by MoveXpress.</p>
      </div>
    </footer>
  );
};

export default Footer;

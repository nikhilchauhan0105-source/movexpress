import { Link } from "react-router";

export const Button = ({ text ,icon ,mt}) => {
  return (
      <button
        data-aos="zoom-out"
        className={`${mt} hover:bg-purple hover:shadow-md/30 duration-150  cursor-pointer flex bg-orange py-[10px] px-[20px] lg:py-[17px] lg:px-[50px] rounded-xl m-auto max-w-fit text-white  font-semibold`}
      >
        {text}
        {icon}
      </button>
  );
};

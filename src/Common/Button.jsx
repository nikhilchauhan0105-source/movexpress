import { Link } from "react-router";

export const Button = ({ text ,icon ,mt}) => {
  return (
    <button data-aos="zoom-out" className={`${mt} buttonstyle`}>
      {text}
      {icon}
    </button>
  );
};

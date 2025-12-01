

export const Button = ({ text ,icon ,mt}) => {
  return (
    <button data-aos="zoom-out" className={`${mt} buttonstyle`}>
      <a href="#">
        {text}
        {icon}
      </a>
    </button>
  );
};

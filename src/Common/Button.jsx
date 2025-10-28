export const Button = ({ text ,icon }) => {
  return (
    
      <button className="cursor-pointer flex bg-orange py-[10px] px-[20px] lg:py-[17px] lg:px-[50px] rounded-xl max-w-fit text-white  font-semibold">
        {text}{icon}
      </button>
   
  );
};

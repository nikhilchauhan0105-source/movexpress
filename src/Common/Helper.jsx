export const Navlist = ["HOME", "About", "Services", "Blog", "FAQs"];


export const Heading = ({head ,subhead}) => {
  return (
    <div className="max-w-[898px] m-auto">
      <p className="text-center text-[1.9rem] lg:text-[3rem]">{head}</p>
      <p className="md:leading-7 text-center text-sm lg:text-[18px] md:mt-[18px]">{subhead}</p>
    </div>
  );
};







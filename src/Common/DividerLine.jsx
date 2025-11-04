
const DividerLine = ({ text, maxwidth }) => {
  return (
    <div className="flex  items-center justify-between my-6">
      <div
        className={`h-[1px] w-full bg-purple ${maxwidth}`}
      ></div>
      <h3 className="mx-4 text-xs leading-[164%] text-purple font-normal">
        {text}
      </h3>
      <div
        className={`h-[1px]  w-full bg-purple ${maxwidth}`}
      ></div>
    </div>
  );
};

export default DividerLine
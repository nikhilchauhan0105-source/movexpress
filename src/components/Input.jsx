

const Input = ( {label ,type,}) => {
  return (
    <div className="flex shrink-0  flex-col gap-y-1 w-full md:max-w-[316px]   ">
      <label className="text-purple leading-6  sm:text-base font-medium" htmlFor="">
        {" "}
        {label}
      </label>
      <input
        type={type}
        className=" p-2 md:p-4 border-1   border-purple rounded-[8px]"
      />
    </div>
  );
}

export default Input
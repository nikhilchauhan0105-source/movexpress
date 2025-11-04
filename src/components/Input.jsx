

const Input = ( {label ,type, placeholder}) => {
  return (
    <div className="flex shrink-0  flex-col gap-y-1 w-full lg:max-w-[316px]   ">
      <label className="text-purple leading-6  sm:text-base font-medium" >
        {" "}
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className=" p-2 md:p-4 border-1   border-purple rounded-[8px]"
      />
    </div>
  );
}

export default Input
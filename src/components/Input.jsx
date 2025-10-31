

const Input = ( {label ,type,}) => {
  return (
    <div className="flex flex-col gap-y-1 max-w-[316px] w-full ">
      <label className="text-purple font-medium" htmlFor="">
        {" "}
        {label}
      </label>
      <input
        type={type}
        className="p-4 border-1  border-purple rounded-[8px]"
      />
    </div>
  );
}

export default Input
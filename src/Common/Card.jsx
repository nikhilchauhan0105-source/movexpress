import { Rightarrow } from "../Icons";

export const Card = ({ icon, head, subhead }) => {
  return (
    <div className="group">
      <div className="flex justify-between   mb-[24px] ">
        <span className="group-hover:translate-x-[25px] duration-300 transition-all">
          {icon}
        </span>

        <span
          className={`group-hover:rotate-[45deg] duration-300 h-fit transition-all `}
        >
          <Rightarrow />
        </span>
      </div>
      <p className="text-[20px] font-semibold ">{head}</p>
      <p className="leading-7 text-black/60">{subhead}</p>
    </div>
  );
};

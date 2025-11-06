import { Arrow } from "./Icons";

const HowToMakeABookingCard = () => {
  return (
    <div className="py-4 px-6 rounded-2xl  max-w-[414px] flex flex-col gap-4    border-1 border-purple/30">
      <h2 className="text-2xl font-medium  leading-[150%]">
        How to Make a Booking with Us?
      </h2>

      <p classNamme="max-w-[366px] font-normal text-[18px] leading-[150%] text-neutral ">
        With MovExpress, booking a Man and van service is simple, quick, and
        efficient. Follow the few steps below to book your van and hit the road
        quickly...
      </p>

      <a className="text-purple font-semibold flex items-center gap-2" href="">
        Learn more <Arrow />
      </a>
    </div>
  );
};

export default HowToMakeABookingCard;

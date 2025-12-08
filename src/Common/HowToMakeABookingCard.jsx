import { Link } from "react-router";
import { Arrow } from "./Icons";

const HowToMakeABookingCard = () => {
  return (
    <div className="py-4 px-6 rounded-2xl group hover:shadow-md/30  max-w-[414px] flex flex-col gap-5  border-2 border-purple/30">
      <h2 className="text-2xl max-w-[321px] font-medium  leading-[150%]">
        How to Make a Booking with Us?
      </h2>

      <p className="max-w-[366px] font-normal text-lg leading-[150%] text-neutral ">
        With MovExpress, booking a Man and van service is simple, quick, and
        efficient. Follow the few steps below to book your van and hit the road
        quickly...
      </p>

      <Link to="/"
        className="text-purple font-semibold flex items-center group-hover:gap-4 transition-all  gap-2"
       
      >
        Learn more <Arrow />
      </Link>
    </div>
  );
};

export default HowToMakeABookingCard;

import { Loopline } from "./Card";
import Marquee from "react-fast-marquee";
import { Runningline } from "./Data";
const MarqueeLine = () => {
  return (
    <Marquee className="bg-purple py-2 xl:py-8" speed={80}>
      {Runningline.map((item, index) => (
        <Loopline key={index} text={item} />
      ))}
    </Marquee>
  );
};

export default MarqueeLine;

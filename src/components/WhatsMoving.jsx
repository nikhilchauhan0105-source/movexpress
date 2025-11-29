import { ArrowLeft, Box, Camera, Truck } from "lucide-react";
import { FormHeading, FormSubHeading } from "../Common/Heading";
import { ProgressBar } from "../Common/Helper";
import { useState } from "react";
import TakePicture from "./TakePicture";
import FillAVan from "./FillAVan";
import AddItems from "./AddItems";

const WhatsMoving = ({ backtab, onClick }) => {
  const [fillvan, setFillVan] = useState(false);
  const [additems, setAddItems] = useState(false);
  const [camera, setCamera] = useState(false);

  return (
    <div >
      <div>
        <FormHeading
          head="What's moving?"
          subhead="Choose what you're moving"
        />
      </div>
      <ProgressBar />
      <FormSubHeading
        head="What are you moving?"
        subhead="Choose your moving approach"
      />
      <div className="max-w-[544px] m-auto  grid mb-4 grid-cols-2 gap-2 ">
        <button
          onClick={() => {
            setFillVan(true);
            setAddItems(false);
            setCamera(false);
          }}
        >
          <div
            className={` ${
              fillvan
                ? "bg-purple text-white"
                : " hover:border-purple hover:bg-purple/5 "
            } whatsmovingbtn border-black/20`}
          >
            <Truck className="m-auto " size={20} />
            <p>Fill a Van </p>
          </div>
        </button>
        <button
          onClick={() => {
            setAddItems(true);
            setFillVan(false);
            setCamera(false);
          }}
        >
          <div
            className={` ${
              additems
                ? "bg-purple text-white"
                : " hover:border-purple hover:bg-purple/5 "
            } 
            whatsmovingbtn border-black/20`}
          >
            <Box className="m-auto " size={20} />
            <p>Add items </p>
          </div>
        </button>
        <button
          className="col-span-2"
          onClick={() => {
            setCamera(true);
            setAddItems(false);
            setFillVan(false);
          }}
        >
          <div
            className={` ${
              camera
                ? "bg-purple text-white"
                : " hover:border-purple hover:bg-purple/5 "
            } whatsmovingbtn border-black/20`}
          >
            <Camera className="m-auto" size={20} />
            <p>Take Picture/Video</p>
          </div>
        </button>
      </div>
      <div className="max-w-[544px] m-auto ">
        {camera ? <TakePicture /> : null}
        {fillvan ? <FillAVan /> : null}
        {additems ? <AddItems /> : null}
      </div>
      <button
        onClick={backtab}
        className="bg-purple text-white px-4 py-1  md:px-8 md:py-4 rounded-4xl text-sm md:text-lg flex gap-1 items-center mt-4"
      >
        <ArrowLeft /> Back
      </button>

      <button
        onClick={onClick}
        className="w-full mt-3 bg-orange rounded-2xl py-3 text-white "
      >
        show my quote
      </button>
    </div>
  );
};

export default WhatsMoving;

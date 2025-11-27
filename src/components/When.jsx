import {
  ArrowLeft,
  ArrowRight,
  Box,
  Calendar,
  Clock,
  Triangle,
  Truck,
} from "lucide-react";
import { FormHeading, FormSubHeading } from "../Common/Heading";
import { informationContext, selectedvanContext } from "../context/context";
import { useContext, useState } from "react";
import { PlacholderParagraph, ProgressBar } from "../Common/Helper";

const When = ({ backtab, changetab }) => {
  const { vanvalue } = useContext(selectedvanContext);
  const { loadingunloadingTime, setLoadingUnloadingTime } =
    useContext(informationContext);
  const { startDate, setStartDate } = useContext(informationContext);
  const { startTime, setStartTime } = useContext(informationContext);

  const [inputActiveSecondary, setInputActiveSecondary] = useState(false);
  const [inputActiveprimery, setInputActivePrimery] = useState(false);

  return (
    <form onSubmit={changetab}>
      <div>
        <FormHeading
          head="when ?"
          subhead="Pick your preferred date and time"
        />
        <ProgressBar />
        <FormSubHeading
          head="When do you need us?"
          subhead="Select your preferred date and time for your move"
        />
        <div className=" p-6 shadow-sm/20 rounded-2xl">
          <div className="flex text-2xl gap-2">
            <span className="bg-purple/10 p-1 px-2 flex justify-center items-center rounded-lg">
              <Truck size={20} className="text-purple " />
            </span>
            <p className="font-medium">{vanvalue}- Time Estimation</p>
          </div>
          <div className="px-3 flex justify-between mt-4">
            <div className="flex items-center gap-2">
              <span>
                <Clock size={16} className="text-black/50" />
              </span>
              <p>Travel Time:</p>
            </div>
            <div className="bg-purple/10 px-3 py-0.5 text-sm rounded-lg text-purple font-semibold">
              <p>7h 57m</p>
            </div>
          </div>
          <div className="px-3 flex justify-between mt-4">
            <div className="flex items-center gap-2">
              <span>
                <Box size={16} className="text-black/50" />
              </span>
              <p>Loading/Unloading:</p>
            </div>
            <div className="bg-purple/10 px-3 py-0.5 text-sm rounded-lg text-purple font-semibold">
              <p>2h 0m</p>
            </div>
          </div>
          <div className="bg-purple text-white flex items-center justify-between font-bold py-3 px-4 rounded-xl mt-3 ">
            <p className="text-sm">Estimated Total Time:</p>
            <p className="text-lg ">9h 57m</p>
          </div>
          <div className="border-1 font-light border-amber-500 p-3 rounded-lg bg-amber-500/20 mt-2 text-sm ">
            <p className="">
              Based on aluton van, we estimate it will take 9h 57m to complete
              your move. Please adjust this to reflect the exact time you need
              to load and unload.
            </p>
          </div>
        </div>

        <div className="shadow-xs/30 p-6 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="p-1.5 bg-amber-500/10 rounded-lg ">
              <Box size={18} className="text-amber-500" />
            </span>
            <p className="font-bold text-lg">Loading & Unloading Time</p>
          </div>
          <p className="mb-2 font-bold text-black/80  ">
            How much time do you need to load and unload?
          </p>
          <div className="flex items-center border-1 border-purple p-3 py-4 rounded-lg justify-between relative input-style-primary">
            <PlacholderParagraph
              content="Select How much time"
              className={startTime ? "opacity-0" : "opacity-100"}
            />
            <Triangle
              size={16}
              fill={" #4b014b"}
              className={`transition-all duration-300 ease-linear  ${
                inputActiveprimery ? "!rotate-0" : "rotate-180"
              }`}
            />
            <select
              onChange={(e) => setStartTime(e.target.value)}
              required
              onClick={() => setInputActivePrimery(!inputActiveprimery)}
              onBlur={() => setInputActivePrimery(false)}
              className={`${
                startTime ? "opacity-100" : "opacity-0"
              } outline-none w-[97%] h-full absolute px-3 left-0 text-violetprimary/50 top-0`}
            >
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
              <option>10:00</option>
              <option>10:30</option>
            </select>
          </div>
        </div>
        <div className="mt-6 shadow-xs/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="p-1.5 bg-purple/10 rounded-lg ">
              <Calendar size={18} className="text-purple" />
            </span>
            <p className="font-bold text-lg">Select Date & Time</p>
          </div>
          <div className=" flex flex-col gap-4">
            <div>
              <p className=" font-semibold">Choose your moving date</p>
              <input
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
                className="border-1 border-purple w-full rounded-xl h-[60px] px-6 outline-0 hover:bg-purple/10 mt-2"
                type="date"
              />
            </div>
            <div>
              <p className=" font-semibold ">Preferred start time</p>
              <div>
                <div className="flex items-center border-1 border-purple p-3 py-4 rounded-lg justify-between relative input-style-primary">
                  <PlacholderParagraph
                    content="Select How much time"
                    className={
                      loadingunloadingTime ? "opacity-0" : "opacity-100"
                    }
                  />
                  <Triangle
                    size={16}
                    fill={" #4b014b"}
                    className={`transition-all duration-300 ease-linear  ${
                      inputActiveSecondary ? "!rotate-0" : "rotate-180"
                    }`}
                  />
                  <select
                    onChange={(e) => setLoadingUnloadingTime(e.target.value)}
                    required
                    onClick={() =>
                      setInputActiveSecondary(!inputActiveSecondary)
                    }
                    onBlur={() => setInputActiveSecondary(false)}
                    className={`${
                      loadingunloadingTime ? "opacity-100" : "opacity-0"
                    } outline-none w-[97%] h-full absolute px-3 left-0 text-violetprimary/50 top-0`}
                  >
                    <option>08:00</option>
                    <option>08:30</option>
                    <option>09:00</option>
                    <option>09:30</option>
                    <option>10:00</option>
                    <option>10:30</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={backtab}
        className="bg-purple text-white  px-8 py-4 rounded-4xl text-lg flex gap-1 items-center mt-4"
      >
        <ArrowLeft /> Back
      </button>

      <button
        type="submit"
        className="cursor-pointer flex items-center justify-center gap-2 mt-[22px] bg-orange rounded-2xl w-full text-center border-b-2 text-white border-black/20 p-[17px]"
      >
        Next : Select items <ArrowRight size={20} />
      </button>
    </form>
  );
};

export default When;

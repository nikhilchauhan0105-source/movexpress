import { useContext } from "react";
import { Info, Location } from "../Common/Icons";
import { FormHeading } from "../Common/Heading";
import { ProgressBar } from "../Common/Helper";
import { informationContext } from "../context/context";

const ChooseDestinationForm = ({ changetab }) => {
  const { isTyped, setIsTyped } = useContext(informationContext);
  const { isDestinationTyped, setIsDestinationTyped } =
    useContext(informationContext);

  const storeChange = (event) => {
    setIsTyped(event.target.value);
  };
  const storeDestination = (event) => {
    setIsDestinationTyped(event.target.value);
  };
  return (
    <form onSubmit={changetab}>
      <FormHeading
        head="Where to"
        subhead="Tell us your pickup and destination"
      />
      <ProgressBar />
      <div className="mt-[21px]">
        <div className="flex flex-col gap-[4px]">
          <p className="font-semibold">Pickup Address</p>
          <div className="flex gap-[12px] py-3 md:py-[18px] px-2 md:px-[16px]  border-1 border-gray-200 rounded-xl">
            <Location />
            <input
              className="w-full focus:outline-hidden"
              type="text"
              onChange={storeChange}
              value={isTyped}
              required
              placeholder="Enter pickup address"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[4px] mt-[10px] lg:mt-[34px]">
          <p className="font-semibold">Destination Address</p>
          <div className="flex gap-[12px] py-3 md:py-[18px] px-2 md:px-[16px]  border-1 border-gray-200 rounded-xl">
            <Location />
            <input
              className="w-full focus:outline-hidden"
              type="text"
              onChange={storeDestination}
              value={isDestinationTyped}
              required
              placeholder="Enter pickup address"
            />
          </div>
        </div>

        <iframe
          className="w-full h-[180px] rounded-xl mt-[15px] lg:mt-[34px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111497.07331438884!2d75.67313700648043!3d29.15631570834024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d8011d0c37%3A0x1d3f0df105af1178!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1760597843244!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="text-green flex justify-between gap-2 items-center bg-green-500/10 mt-[12px] p-[12px] rounded-2xl">
          <Info />
          <div className="max-w-[495px] text-[12px] lg:text-base w-full">
            <p>Distance</p>
            <p>Between pickup and destination</p>
          </div>
          <p className="text-[12px] lg:text-base">1 miles</p>
        </div>
      </div>

      <button type="submit" className="submit-button-style">
        Show quote
      </button>
    </form>
  );
};

export default ChooseDestinationForm;

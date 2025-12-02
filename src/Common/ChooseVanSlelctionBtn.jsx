import { Check } from "lucide-react";
import smallvanimage from "../assets/images/small_Van.webp";
import mediumvanimage from "../assets/images/medium_van.jpg";
import largevanimage from "../assets/images/large_van.jpg";
import lutonvanimage from "../assets/images/luton_van.jpg";
import lutonboxvanimage from "../assets/images/luton_boxVan.jpg";
import { useContext, useState } from "react";
import { informationContext} from "../context/context";

const ChooseVanSlelctionBtn = () => {
  const [smallvan, setSmallVan] = useState(false);
  const [mediumvan, setMediumVan] = useState(false);
  const [largevan, setLargeVan] = useState(false);
  const [lutonvan, setlutonVan] = useState(false);
  const [boxvan, setBoxVan] = useState(false);

  const { vanvalue, setVanValue } = useContext(informationContext);

  return (
    <section>
      <div className="flex flex-col gap-3">
        <div
          className={`flex  gap-3 border-1  ${
            smallvan ? "bg-purple/10 border-purple " : " hover:border-amber-600"
          } shadow-sm/30 relative z-1 border-black/20 rounded-2xl py-3 p-2`}
        >
          <input
            name="criminal"
          
            onChange={(e) => {
              setVanValue(e.target.value);
            }}
            onInput={() => {
              setMediumVan(false);
              setLargeVan(false);
              setlutonVan(false);
              setBoxVan(false);
              setSmallVan(true);
            }}
            value="small van"
            type="radio"
            className="absolute  top-0 left-0 w-full h-full z-10 opacity-0"
          />
          <div
            className={`${
              smallvan ? "bg-purple" : null
            }  w-8 h-8 rounded-full  flex items-center justify-center absolute right-3.5 top-3.5 border-1 border-black/20`}
          >
            {smallvan ? (
              <Check size={19} strokeWidth={2} className="text-white" />
            ) : null}
          </div>
          <div className="  max-w-[65px] max-h-[65px]">
            <img
              className="object-cover rounded-xl h-full w-full"
              src={smallvanimage}
              alt=""
            />
          </div>
          <div>
            <h2 className="font-semibold">Small Van</h2>
            <p className="text-xs font-light mb-1">Perfect for small moves</p>
            <p className="text-xs">Up to 10 cubic feet </p>
            <div className="flex gap-2 text-[6px] md:text-xs mt-1.5">
              <div className="bg-purple/10 px-2 rounded-2xl py-1">
                <p>Comapct size</p>
              </div>
              <div className="bg-purple/10 px-2 rounded-2xl py-1">
                <p>Easy parking </p>
              </div>
              <div className="bg-purple/10 px-2 rounded-2xl py-1">
                <p>City friendly</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex  gap-3 border-1  ${
            mediumvan ? "bg-purple/10 border-purple" : " hover:border-amber-600"
          } shadow-sm/30 transition-all relative z-1 border-black/20 rounded-2xl py-3 p-2`}
        >
          <input
            name="criminal"
           
            onChange={(e) => {
              setVanValue(e.target.value);
            }}
            onClick={() => {
              setMediumVan(true);
              setLargeVan(false);
              setlutonVan(false);
              setBoxVan(false);
              setSmallVan(false);
            }}
            value="medium Van"
            type="radio"
            className="absolute top-0 left-0 w-full h-full z-10 opacity-0"
          />
          <div
            className={`${
              mediumvan ? "bg-purple" : null
            }  w-8 h-8 rounded-full transition-all  flex items-center justify-center absolute right-3.5 top-3.5 border-1 border-black/20`}
          >
            {mediumvan ? (
              <Check size={19} strokeWidth={2} className="text-white" />
            ) : null}
          </div>
          <div className=" max-w-[65px] ">
            <img
              className="rounded-xl object-cover w-full"
              src={mediumvanimage}
              alt=""
            />
          </div>
          <div>
            <h2 className="font-semibold">Medium Van</h2>
            <p className="text-xs font-light mb-1">Perfect for small moves</p>
            <p className="text-xs">Up to 20 cubic feet </p>
            <div className="flex gap-2 text-[6px] md:text-xs mt-1.5">
              <div className="bg-purple/10 px-2 rounded-2xl py-1">
                <p>Good storage</p>
              </div>
              <div className="bg-purple/10 px-2 rounded-2xl py-1">
                <p>Varsatile </p>
              </div>
              <div className="bg-purple/10 px-2 rounded-2xl py-1">
                <p>Popular choice</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex items-center gap-3 border-1  ${
            largevan ? "bg-purple/10 border-purple" : " hover:border-amber-600"
          } shadow-sm/30 transition-all relative z-1 border-black/20 rounded-2xl py-3 p-2`}
        >
          <input
            name="criminal"
           
            onChange={(e) => {
              setVanValue(e.target.value);
            }}
            onInput={() => {
              setMediumVan(false);
              setLargeVan(true);
              setlutonVan(false);
              setBoxVan(false);
              setSmallVan(false);
            }}
            value="Large Van"
            type="radio"
            className="absolute top-0 left-0 w-full h-full z-10 opacity-0"
          />
          <div
            className={`${
              largevan ? "bg-purple" : null
            }  w-8 h-8 rounded-full transition-all flex items-center justify-center absolute right-3.5 top-3.5 border-1 border-black/20`}
          >
            {largevan ? (
              <Check size={19} strokeWidth={2} className="text-white" />
            ) : null}
          </div>
          <div className=" max-w-[65px] ">
            <img
              className="object-cover rounded-xl w-full"
              src={largevanimage}
              alt=""
            />
          </div>
          <div>
            <h2 className="font-semibold">Large Van</h2>
            <p className="text-xs font-light mb-1">Perfect for small moves</p>
            <p className="text-xs">Up to 30 cubic feet </p>
            <div className="flex gap-2 text-[6px] md:text-xs mt-1.5">
              <div className="bg-purple/10 px-2 rounded-2xl py-1">
                <p>Spacious</p>
              </div>
              <div className="bg-purple/10 px-2 rounded-2xl py-1">
                <p>Heavy items </p>
              </div>
              <div className="bg-purple/10 px-2 rounded-2xl py-1">
                <p>Long distance</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex  gap-3 border-1  ${
            lutonvan ? "bg-purple/10 border-purple " : " hover:border-amber-600"
          } shadow-sm/30 relative z-1 border-black/20 rounded-2xl py-3 p-2`}
        >
          <input
            name="criminal"
            
            onChange={(e) => {
              setVanValue(e.target.value);
            }}
            onInput={() => {
              setMediumVan(false);
              setLargeVan(false);
              setlutonVan(true);
              setBoxVan(false);
              setSmallVan(false);
            }}
            value="Luton Van"
            type="radio"
            className="absolute top-0 left-0 w-full h-full z-10 opacity-0"
          />
          <div
            className={`${
              lutonvan ? "bg-purple" : null
            }  w-8 h-8 rounded-full transition-all  flex items-center justify-center absolute right-3.5 top-3.5 border-1 border-black/20`}
          >
            {lutonvan ? (
              <Check size={19} strokeWidth={2} className="text-white" />
            ) : null}
          </div>
          <div className=" max-w-[65px] ">
            <img
              className="object-cover rounded-xl w-full"
              src={lutonboxvanimage}
              alt=""
            />
          </div>
          <div>
            <h2 className="font-semibold">Luton Van</h2>
            <p className="text-xs font-light mb-1">Perfect for small moves</p>
            <p className="text-xs">Up to 10 cubic feet </p>
            <div className="flex gap-2 text-[6px] md:text-xs mt-1.5">
              <div className="bg-purple/10 px-2 rounded-2xl py-1">
                <p>Maximum space</p>
              </div>
              <div className="bg-purple/10 px-2 rounded-2xl py-1">
                <p>Commercial grade </p>
              </div>
              <div className="bg-purple/10 px-2 rounded-2xl py-1">
                <p>Heavy duty</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex items-center gap-3 border-1  ${
            boxvan ? "bg-purple/10 border-purple " : " hover:border-amber-600"
          } shadow-sm/30 relative z-1 border-black/20 rounded-2xl py-3 p-2`}
        >
          <input
            name="criminal"
            onChange={(e) => {
              setVanValue(e.target.value);
            }}
            onInput={() => {
              setMediumVan(false);
              setLargeVan(false);
              setlutonVan(false);
              setBoxVan(true);
              setSmallVan(false);
            }}
            value="Lutonbox van"
            type="radio"
            className="absolute top-0 left-0 w-full h-full z-10 opacity-0"
          />
          <div
            className={`${
              boxvan ? "bg-purple" : null
            } l w-8 h-8 rounded-full transition-all  flex items-center justify-center absolute right-3.5 top-3.5 border-1 border-black/20`}
          >
            {boxvan ? (
              <Check size={19} strokeWidth={2} className="text-white" />
            ) : null}
          </div>
          <div className=" max-w-[65px] ">
            <img
              className="object-cover rounded-xl w-full"
              src={lutonvanimage}
              alt=""
            />
          </div>
          <div>
            <h2 className="font-semibold">Luton Box Van</h2>
            <p className="text-xs font-light mb-1">Perfect for small moves</p>
            <p className="text-xs">Up to 10 cubic feet </p>
            <div className="flex gap-2 text-[6px] md:text-xs mt-1.5">
              <div className="bg-purple/10 px-2 rounded-2xl py-1">
                <p>Tail lift </p>
              </div>
              <div className="bg-purple/10 px-2 rounded-2xl py-1">
                <p>Heavy items</p>
              </div>
              <div className="bg-purple/10 px-2 rounded-2xl py-1">
                <p>Commercial grade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseVanSlelctionBtn;

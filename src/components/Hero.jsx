import { useEffect, useState } from "react";
import {
  Greenstar,
  Halfstar,
  Licensed,
  Trust,
  Whitestar,
} from "../Common/Icons";
import ChooseDestinationForm from "./ChooseDestinationForm";
import ChooseYourVan from "./ChooseYourVan";
import { useNavigate, useSearchParams } from "react-router";
import { selectedvanContext } from "../context/context";
import { tabnoContext } from "../context/context";
import When from "./When";
import WhatsMoving from "./WhatsMoving";
import { FinalSelectedItemsCard } from "../Common/Card";

const Hero = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const params = searchParams.get("tab");
  const [formStpes, setFormSteps] = useState("pickup-address");
  const [formStpesno, setFormStepsNo] = useState(1);
  const [vanvalue, setVanValue] = useState("");

  const handleselectvan = (e) => {
    setVanValue(e);
  };
  useEffect(() => {
    if (params) {
      setFormSteps(params);
    }

    if (params === "choose-your-van") {
      setFormStepsNo(2);
    } else if (params === "when-moves") {
      setFormStepsNo(3);
    } else if (params === "Whats-moving") {
      setFormStepsNo(4);
    }
  }, []);

  return (
    <>
      <tabnoContext.Provider value={formStpesno}>
        <selectedvanContext.Provider
          value={{ vanvalue, setVanValue: handleselectvan }}
        >
          <section className=" bg-purple px-3 lg:px-0 text-white relative">
            <div className="w-[393px] h-[393px] rounded-full bg-orange blur-[120px] absolute top-20 right-25 z-1 "></div>
            {formStpes == "final-ouput" ? (
              <FinalSelectedItemsCard
                onClick={() => {
                  navigate("?tab=pickup-address");
                  setFormSteps("pickup-address");
                  setFormStepsNo((prev) => prev=1);
                }}
              />
            ) : null}

            <div
              data-aos="fade-up"
              className="max-w-[1294px]  flex-col pt-[25px] sm:pt-[10px] md:pt-[48px] xl:pt-[68px] items-center lg:items-end relative gap-2 z-2 lg:flex-row flex justify-between m-auto"
            >
              <div className="max-w-[652px] sm:flex-row flex-col    lg:items-start lg:flex-col flex text-[32px] sm:text-[45px] md:text-[50px] lg:text-[60px] xl:text-[74px] font-bold">
                <div>
                  <h1>Move Smart. </h1>
                  <h1>Move Easy. </h1>
                  <h1>MoveXpress.</h1>
                  <p className="max-w-[406px] text-[14px] lg:text-lg font-normal leading-[150%]">
                    Book reliable, stress-free removals across London today.
                  </p>
                </div>
                <div className="text-base font-normal">
                  <div className=" max-w-[422px] mt-[42px] flex">
                    <div className="flex gap-[16px] max-w-[191px]">
                      <Trust />
                      <p className="text-[12px] sm:text-base">
                        Trusted across London
                      </p>
                    </div>
                    <div className="flex gap-[16px] max-w-[191px]">
                      <Licensed />
                      <p className="text-[12px] sm:text-base">
                        Licensed & Insured
                      </p>
                    </div>
                  </div>
                  <div className="md:max-w-[318px] w-full  mt-[10px] lg:mt-[82px] bg-orange px-[15px] lg:px-[31px] rounded-t-md py-[17px] ">
                    <div>
                      <div className="flex items-center gap-1 lg:pt-0  justify-center">
                        <Greenstar />
                        <p className="text-[25px] font-semibold lg:text-[40px]">
                          Trustpilot
                        </p>
                      </div>

                      <div className="flex gap-[4px] max-w-[150px] m-auto lg:max-w-[234px] my-[10px] justify-center">
                        <Whitestar />
                        <Whitestar />
                        <Whitestar />
                        <Whitestar />
                        <Halfstar />
                      </div>
                      <p className="text-[14px] lg:text-[20px] font-medium text-center">
                        Rated 4.9/5.0
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[644px] w-full  p-4   md:p-[18px] lg:py-6 mb-1.5 lg:p-6 text-black bg-white rounded-3xl">
                {formStpes === "pickup-address" && (
                  <ChooseDestinationForm
                    changetab={() => {
                      navigate("?tab=choose-your-van");
                      setFormSteps("choose-your-van");
                      setFormStepsNo((prev) => prev + 1);
                    }}
                  />
                )}
                {formStpes === "choose-your-van" && (
                  <ChooseYourVan
                    changetab={() => {
                      navigate("?tab=when-moves");
                      setFormSteps("when-moves");
                      setFormStepsNo((prev) => prev + 1);
                    }}
                    backtab={() => {
                      navigate("?tab=pickup-address");
                      setFormSteps("pickup-address");
                      setFormStepsNo((prev) => prev - 1);
                    }}
                  />
                )}

                {formStpes === "when-moves" && (
                  <When
                    backtab={() => {
                      navigate("?tab=choose-your-van");
                      setFormSteps("choose-your-van");
                      setFormStepsNo((prev) => prev - 1);
                    }}
                    changetab={() => {
                      navigate("?tab=Whats-moving");
                      setFormSteps("Whats-moving");
                      setFormStepsNo((prev) => prev + 1);
                    }}
                  />
                )}

                {formStpes === "Whats-moving" && (
                  <WhatsMoving
                    backtab={() => {
                      navigate("?tab=when-moves");
                      setFormSteps("when-moves");
                      setFormStepsNo((prev) => prev - 1);
                    }}
                    onClick={() => {
                      navigate("?tab=final-ouput");
                      setFormSteps("final-ouput");
                      setFormStepsNo((prev) => prev + 1);
                    }}
                  />
                )}
              </div>
            </div>
          </section>
        </selectedvanContext.Provider>
      </tabnoContext.Provider>
    </>
  );
};

export default Hero;

import { Card } from "../Common/Card";
import {  Heading } from "../Common/Helper";

import { serviceslist } from "../Common/Data";
import { Button } from "../Common/Button";

const Services = () => {
  return (
    <section
      id="services"
      className="xl:pt-[80px]  py-[20px] px-3 bg-[#F6F7F9]"
    >
      <div>
        <Heading
          head="Our Top Rated  Services"
          subhead="Count on us as your dependable partner for exceptional Moving solutions that turn spaces into pristine havens. Our dedicated team offers a wide array of services tailored to your unique requirements. "
        />
      </div>
      <div className="max-w-[1294px] flex  flex-wrap justify-center   mt-[56px]  gap-6 lg:gap-7 m-auto">
        {serviceslist.map((i, indx) => (
          
          <div className={` md:max-w-[310px] w-full rounded-2xl hover:shadow-md p-6 bg-white`}>
            <Card
              icon={i.icon}
              arrow={i.arrow}
              head={i.head}
              subhead={i.subhead}
              key={indx}
            />
          </div>
        ))}
      </div>
      <div className="max-w-[1249px]  m-auto flex justify-center my-20 pt-6">
      <Button text="Get a Qoute" />
      </div>
    </section>
  );
};

export default Services;

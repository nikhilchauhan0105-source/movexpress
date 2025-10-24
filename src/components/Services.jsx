
import { Button, Heading } from "../Common/Helper";
import { Card } from "../Common/Card";

import { Arry } from "../Common/Array";

const Services = () => {
   
  return (
    <section id="services" className="xl:pt-[80px]  py-[20px] px-3 bg-[#F6F7F9]">
      <div>
        <Heading
          head="Our Top Rated  Services"
          subhead="Count on us as your dependable partner for exceptional Moving solutions that turn spaces into pristine havens. Our dedicated team offers a wide array of services tailored to your unique requirements. "
        />
      </div>
      <div className="max-w-[1294px] flex  flex-wrap justify-center mt-[56px]  gap-3 lg:gap-7 m-auto">
        {Arry.map((i, indx) => (
          <div className="md:max-w-[310px] w-full rounded-2xl hover:shadow-md p-[24px] bg-white">
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
    
        <Button text={"Get a Qoute"} />
      
    </section>
  );
};

export default Services;

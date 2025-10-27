import { Heading } from "../Common/Helper";
import { Workcard } from "../Common/Card";
import { worklist } from "../Common/Data";

const Work = () => {
  return (
    <section className="py-[30px] px-3 xl:py-[80px]">
      <div>
        <Heading
          head="Our Work Process"
          subhead="Count on us as your dependable partner for exceptional Moving solutions that turn spaces into pristine havens. Our dedicated team offers a wide array of services tailored to your unique requirements. "
        />
      </div>
      <div className="max-w-[1296px]  m-auto flex justify-center gap-3 lg:gap-[48px] mt-[58px] flex-wrap ">
        {worklist.map((items, index) => (
          <div className="md:max-w-[287px] w-full">
            <Workcard
              key={index}
              icon={items.icon}
              steps={items.step}
              head={items.head}
              subhead={items.subhead}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;

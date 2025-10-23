
import { Heading } from "../Common/Helper";
import { Card } from "../Common/Card";
import {
  Rightarrow,
  Vanservice,
  Furniture,
  Pianotransport,
  Storagetransport,
  Officemove,
} from "../Icons";

const Services = () => {
    const arry = [
      {
        icon: <Vanservice />,
        arrow: <Rightarrow />,
        head: "Man & Van Services",
        subhead:
          "A convenient and flexible moving solution typically offered by a single professional or a small team with a van",
      },
      {
        icon: <Officemove />,
        arrow: <Rightarrow />,
        head: "House Removals",
        subhead:
          "House removals refer to the process of moving (packing, loading, transporting, unloading) from one residence to another.",
      },
      {
        icon: <Furniture />,
        arrow: <Rightarrow />,
        head: "Furniture & Large Items",
        subhead:
          "Furniture delivery is a service focused on transporting furniture items from sellers or retailers to customers homes.",
      },
      {
        icon: <Pianotransport />,
        arrow: <Rightarrow />,
        head: "Piano Transport",
        subhead:
          "Piano transport involves the specialized and meticulous relocation of pianos from one location to another.",
      },
      {
        icon: <Storagetransport />,
        arrow: <Rightarrow />,
        head: "Storage Removals",
        subhead:
          "Storage removal refers to the process of relocating items to or from a storage facility. This service is designed to assist",
      },
      {
        icon: <Officemove />,
        arrow: <Rightarrow />,
        head: "Office Move",
        subhead:
          "Office move is the comprehensive process of moving a business from one physical location to another.",
      },
    ];
  return (
    <section className="lg:py-[80px] pt-[20px] px-3 bg-[#F6F7F9]">
      <div>
        <Heading head="Our Top Rated  Services" />
        <Heading subhead="Count on us as your dependable partner for exceptional Moving solutions that turn spaces into pristine havens. Our dedicated team offers a wide array of services tailored to your unique requirements. " />
      </div>
      <div className="max-w-[1294px] flex  flex-wrap justify-center mt-[56px] gap-3 lg:gap-10 m-auto">
        {arry.map((i, indx) => (
          <div className="max-w-[310px] rounded-2xl p-[24px] bg-white">
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
    </section>
  );
};

export default Services;

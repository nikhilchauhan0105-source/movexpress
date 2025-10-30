import { Button } from "../Common/Button";
import { IncludeServices, WhyChooseOurServicesCard } from "../Common/Card";
import { servicesIncludelist, WhyChooseOurSevicesDetails } from "../Common/Data";
import { Heading } from "../Common/Helper";
import { Trust } from "../Common/Icons";
import MarqueeLine from "../Common/MarqueeLine";
import Navbar from "../Common/Navbar";
import PagesHeading from "../Common/PagesHeading";
import BookYourService from "../components/BookYourService";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import Whytrust from "../components/Whytrust";

const ManVanService = () => {
  return (
    <>
      <Navbar />
      <PagesHeading
        heading="Man and Van Services"
        subheading="Fast, Reliable & Affordable Moving Solutions"
        button={<Button text="Get a Qoute" mt="mt-6" />}
      />
      <div className="max-w-[1296px]  m-auto px-3 py-10 lg:py-20">
        <p className="text-2xl lg:text-5xl text-textlight">
          Looking for professional man and van services near you? At MoveXpress,
          we make moving simple, stress-free, and cost-effective. Whether you’re
          relocating your home, shifting your office, delivering furniture, or
          transporting large parcels, our expert movers and well-equipped vans
          are here to handle everything for you.
        </p>
      </div>

      <section className="py-10 lg:py-20 px-3">
        <Heading
          head="Why Choose Our Man and Van Services?"
          subhead="We offer a complete range of moving services designed to suit your needs"
        />
        <div className="max-w-[1294px] flex justify-center flex-wrap mt-20 gap-6 m-auto">
          {WhyChooseOurSevicesDetails.map((items, index) => (
            <WhyChooseOurServicesCard
              icon={items.icon}
              head={items.head}
              text={items.text}
              key={index}
            />
          ))}
        </div>
      </section>
      <MarqueeLine />

      <section className="py-10 lg:py-20 bg-secondry px-3">
        <Heading
          head="Our Man and Van Services Include"
          subhead="Expert Moving Services Designed to Make Your Life Easier"
        />

        <div className="max-w-[1440px] m-auto flex flex-wrap gap-6  mt-5 lg:mt-20 justify-center">
{servicesIncludelist.map((items,index)=>(
     <IncludeServices
     key={index}
     icon={items.icon}
     head={items.head}
     text={items.subhead}
     />
)) }
        </div>
      </section>
      <Whytrust/>
      <FAQs/>
      <BookYourService/>
      <Footer/>
    </>
  );
};

export default ManVanService;

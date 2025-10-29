import { AboutCard, Loopline } from "../Common/Card";
import { AboutCardList, DoBestDetails, Runningline } from "../Common/Data";
import { Heading } from "../Common/Helper";
import Navbar from "../Common/Navbar";
import PagesHeading from "../Common/PagesHeading";
import BlogsSection from "../pages/BlogsSection";
import BookYourService from "./BookYourService";
import FAQs from "./FAQs";
import Footer from "./Footer";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <>
      <Navbar />
      <PagesHeading
        heading=" About Us"
        subheading="Your Trusted Partner for Stress-Free Moving"
      />
      <div className="max-w-[1296px] px-3 my-20 flex-wrap justify-center gap-3 md:gap-6 m-auto flex ">
        {AboutCardList.map((items, index) => (
          <AboutCard
            icon={items.icon}
            head={items.head}
            text={items.text}
            maxwidth="w-full md:max-w-[305px]"
            textwidth="max-w-[257px]"
            key={index}
          />
        ))}
      </div>

      <section>
        <p className="max-w-[1296px] text-5xl text-textlight leading-[130%] m-auto font-medium py-20 tracking-[-1px]">
          <span className="text-black">MoveXpress</span> is more than a moving
          company — we’re your transition partners. We manage everything from
          packing your valuables to transporting and unloading them at your new
          place. Our skilled team treats your belongings with care, ensuring
          that everything, from delicate antiques to bulky furniture, arrives
          safely and on time.
        </p>
      </section>

      <section className="py-20">
        <Heading
          head="What We Do Best"
          subhead="We offer a complete range of moving services designed to suit your needs"
        />
        <div className="max-w-[1296px] m-auto mt-14 px-3 flex-wrap flex justify-center gap-3 md:gap-6">
          {DoBestDetails.map((items, index) => (
            <AboutCard
              icon={items.icon}
              head={items.head}
              text={items.text}
              maxwidth="w-full md:max-w-[287px]"
              textwidth="max-w-[181px]"
              key={index}
            />
          ))}
        </div>
      </section>
      <section>
       
          <Marquee className="bg-purple py-8"speed={80}>
            
            {Runningline.map((item, index) => (
              <Loopline key={index} text={item} />
            ))}
          </Marquee>
       
      </section>
      <FAQs />
      <BlogsSection />
      <BookYourService />
      <Footer />
    </>
  );
};

export default About;

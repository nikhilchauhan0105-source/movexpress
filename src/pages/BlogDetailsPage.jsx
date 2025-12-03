import Navbar from "../Common/Navbar";
import MakeABookingSub from "../Common/MakeABookingSub";
import ReviewBooking from "../Common/ReviewBooking";
import BookYourService from "../components/BookYourService";
import Footer from "../components/Footer";
import HowToMakeABookingCard from "../Common/HowToMakeABookingCard";
import { Topbutton } from "../Common/Helper";
import { useEffect, useState } from "react";
import { Calender, Clock } from "../Common/Icons";
import { useParams } from "react-router";
import { blogcarddetail } from "../Common/Data";
import { MakeABookingCard } from "../Common/Card";
import { pageparagraph } from "../Common/BlogsDetailsData";
import { PagesHeading } from "../common/Heading";

const BlogDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [blogsDetails, setblogsDetails] = useState("");

  const params = useParams();

  const filterblog = blogcarddetail.find((obj) => obj.slug === params.blogid);
  useEffect(() => {
    setblogsDetails(filterblog);
    console.log(filterblog.slug);
    console.log(params.blogid);
  }, [params.blogid]);

  return (
    <section>
      <Navbar />
      <PagesHeading
        calender={<Calender />}
        clock={<Clock />}
        date="05 May, 2023"
        time="Read 10 Min"
        heading={blogsDetails?.data?.head}
      />
      <div className="max-w-[1296px] px-3 pb-20 gap-6 xl:gap-0 flex-col mb-16  flex xl:flex-row justify-between mt-20 m-auto">
        <div className="max-w-[728px] m-auto">
          {"How-To-Pack-Fragile-Items" == params.blogid ? (
            <p className="leading-[170%] text-black/60">
              {pageparagraph.maindescription}
            </p>
          ) : null}
          {"How-to-Make-a-Booking" == params.blogid ? (
            <p className="leading-[170%] text-black/60">
              {pageparagraph.maindescription}
            </p>
          ) : null}
          {"How-to-Declutter-Before-Moving" == params.blogid ? (
            <p className="leading-[170%] text-black/60">
              {pageparagraph.maindescription}
            </p>
          ) : null}

          <MakeABookingSub
            head={pageparagraph.cardwithheading[0].heading}
            subhhead={pageparagraph.cardwithheading[0].description}
          />
          <div className="grid grid-cols-2 gap-2 md:gap-0 justify-between  ">
            {pageparagraph.cardwithheading[0].list.map((obj, index) => {
              return (
                <div key={index}>
                  <MakeABookingCard
                    head={obj.title}
                    subhead={obj.description}
                  />
                </div>
              );
            })}
          </div>
          <p className="text-neutral my-6 leading-[170%]">
            {pageparagraph.cardwithheading.para}
          </p>
          <MakeABookingSub
            head={pageparagraph.cardwithheading[1].heading}
            subhhead={pageparagraph.cardwithheading[1].description}
          />
          <div className="flex justify-between  flex-wrap gap-5 ">
            {pageparagraph.cardwithheading[1].list.map((obj, index) => {
              return (
                <div key={index}>
                  <MakeABookingCard
                    head={obj.title}
                    subhead={obj.description}
                  />
                </div>
              );
            })}
          </div>
          <p className="text-textlight my-6">
            {pageparagraph.cardwithheading[1].para}
          </p>
          <MakeABookingSub
            head={pageparagraph.cardwithheading[2].heading}
            subhhead={pageparagraph.cardwithheading[2].description}
          />
          <div className="flex justify-between  flex-wrap gap-5 ">
            {pageparagraph.cardwithheading[2].list.map((obj, index) => {
              return (
                <div key={index}>
                  <MakeABookingCard
                    head={obj.title}
                    subhead={obj.description}
                  />
                </div>
              );
            })}
          </div>
          <p className="text-textlight my-6">
            {pageparagraph.cardwithheading[2].para}
          </p>
          <MakeABookingSub
            head="Choose Your Moving Date and Time"
            subhhead="We offer flexible scheduling options:"
          />
          <div className="flex flex-wrap gap-6">
            <MakeABookingCard
              head="Today's Price"
              subhead="Looking to lease a van right now? Book for today at the displayed rate."
              subheadwidth="max-w-[238px]"
            />
            <MakeABookingCard
              head="Next day"
              subhead="If you plan to move the following day, you can get a slightly reduced price."
              subheadwidth="max-w-[304px]"
            />
            <MakeABookingCard
              head="Custom Date & Time"
              subhead="Choose the date to move at your convenience."
              subheadwidth="max-w-[238px]"
            />
          </div>
          <p className="text-textlight my-6">
            You can also decide how many hours you need the van and have enough
            time to load and unload your items.
          </p>
          <div className="max-w-[728px]">
            <MakeABookingSub
              head="Review Your Booking Details"
              subhhead="When making your booking, you will notice:"
            />
            <div className="flex flex-wrap gap-6 ">
              <ReviewBooking text="Estimated travel time" />
              <ReviewBooking text="Load & unload time" />
              <ReviewBooking text="Total duration of the job" />
              <ReviewBooking text="Final price" />
            </div>
            <p className="text-textlight my-6">
              As with every step or task, double-check everything to ensure it
              is in order before moving on to the next phase.
            </p>
          </div>
          <div className="max-w-[728px]">
            <MakeABookingSub
              head="Enter Your Contact Details"
              subhhead="To complete your booking, some personal information is required:"
            />
            <div className="flex flex-wrap gap-6 ">
              <ReviewBooking text="First name & surname" />
              <ReviewBooking text="Email address" />
              <ReviewBooking text="Phone number" />
            </div>
            <p className="text-textlight my-6">
              As with every step or task, double-check everything to ensure it
              is in order before moving on to the next phase.
            </p>
          </div>
          <div className="mt-6">
            <MakeABookingSub head="You can choose to" />
            <div className="max-w-[496px] my-6">
              <h4 className="text-[#0D2440] text-[18px] font-medium">
                Registration
              </h4>
              <p className="leading-[170%] text-[#0D2440] mt-3">
                Enter your data and plan your next trip; use the application to
                track your driver.
              </p>
            </div>
            <div className="max-w-[496px] ">
              <h4 className="text-[#0D2440] text-[18px] font-medium">
                Become a guest
              </h4>
              <p className="leading-[170%] text-[#0D2440] mt-3">
                Make a reservation without creating a new account..
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[414px] flex flex-col mx-auto sticky top-25 h-fit  gap-4">
          <HowToMakeABookingCard />
          <HowToMakeABookingCard />
        </div>
      </div>
      <BookYourService />
      <Footer />
      <Topbutton />
    </section>
  );
};

export default BlogDetailsPage;

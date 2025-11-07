import Navbar from "../Common/Navbar";
import PagesHeading from "../Common/PagesHeading";
import MakeABookingSub from "../Common/MakeABookingSub";
import MakeABookingCard from "../Common/MakeABookingCard";
import ReviewBooking from "../Common/ReviewBooking";
import BookYourService from "../components/BookYourService";
import Footer from "../components/Footer";
import HowToMakeABookingCard from "../Common/HowToMakeABookingCard";
import { Topbutton } from "../Common/Helper";

const BlogDetailsPage = () => {
  return (
    <section>
      <Navbar />
      <PagesHeading heading="How to Make a Booking with Us?" />
      <div className="max-w-[1296px] px-3 pb-20 gap-6 xl:gap-0 flex-col mb-16  flex xl:flex-row justify-between mt-20 m-auto">
        <div className="max-w-[728px] m-auto">
          <p className="text-textlight leading-[170%]">
            With MovExpress, booking a Man and van service is simple, quick, and
            efficient. Follow the few steps below to book your van and hit the
            road quickly.
          </p>
          <MakeABookingSub
            head="Enter Your Pickup and Drop-off Location"
            subhhead="Start by providing the details of your move:"
          />
          <div className="flex flex-wrap gap-2 md:gap-0 justify-between  ">
            <MakeABookingCard
              head="Pickup Postcode"
              subhead="This is the postcode of the place where you want the van picked up."
              subheadwidth="max-w-[238px]"
            />
            <MakeABookingCard
              head="Drop-off Postcode"
              subhead="Enter the latitude and longitude of the drop-off location."
              subheadwidth="max-w-[213px]"
            />
          </div>
          <p className="text-neutral my-6 leading-[170%]">
            Our system will give the estimated travel duration and quote the
            fare immediately upon input.
          </p>
          <MakeABookingSub
            head="Choose the Right Van Size"
            subhhead="Choose the van size that is most appropriate for your move. We have four van sizes for customers to choose from:"
          />
          <div className="flex justify-between  flex-wrap gap-5 ">
            <MakeABookingCard
              head="Small Van"
              subhead="This is the postcode of the place where you want the van picked up."
              subheadwidth="max-w-[238px]"
            />
            <MakeABookingCard
              head="Drop-off Postcode"
              subhead="Enter the latitude and longitude of the drop-off location."
              subheadwidth="max-w-[213px]"
            />
            <MakeABookingCard
              head="Large Van"
              subhead="Ideal for transporting big furniture or several oversized pieces (starting from £80)."
              subheadwidth="max-w-[238px]"
            />
            <MakeABookingCard
              head="Luton Van"
              subhead="Best for big house moves or office relocations (from £90)."
              subheadwidth="max-w-[213px]"
            />
          </div>
          <p className="text-textlight my-6">
            If you are unsure which van size is most appropriate for your move
            based on the volume of your belongings, feel free to consult with
            our team.
          </p>
          <MakeABookingSub
            head="Select Your Help Option"
            subhhead="Determine if you require any assistance to help you move to the next step:"
          />
          <div className="flex flex-wrap gap-6">
            <MakeABookingCard
              head="No Help Needed"
              subhead="You load and unload the van, and nobody helps."
              subheadwidth="max-w-[238px]"
            />
            <MakeABookingCard
              head="Driver + 1 Helper"
              subhead="The driver will be accompanied by an assistant to assist loading and unloading"
              subheadwidth="max-w-[304px]"
            />
            <MakeABookingCard
              head="Driver + 2 Assistants"
              subhead="They will help transport your items, taking less time."
              subheadwidth="max-w-[238px]"
            />
          </div>
          <p className="text-textlight my-6">
            Assistance is especially helpful when transporting massive items,
            though it can also be required for anything that may not fit into a
            typical car.
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
        <div className="max-w-[414px] flex flex-col sticky top-40 h-fit  gap-4">
          <HowToMakeABookingCard />
          <HowToMakeABookingCard />
        </div>
      </div>
      <BookYourService />
      <Footer />
      <Topbutton/>
    </section>
  );
};

export default BlogDetailsPage;

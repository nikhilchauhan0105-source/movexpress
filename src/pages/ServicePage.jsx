
import { Button } from "../Common/Button";
import Navbar from "../Common/Navbar"
import PagesHeading from "../Common/PagesHeading"
import Services from "../components/services";
import FAQs from "../components/FAQs";
import BlogsSection from "./BlogsSection";
import BookYourService from "../components/BookYourService";
import Footer from "../components/Footer";
import MarqueeLine from "../Common/MarqueeLine";
import Work from "../components/Work";


const ServicePage = () => {
  return (
    <>
      <Navbar />
      <PagesHeading
        heading="MoveXpress Services"
        subheading="Reliable, Affordable & Stress-Free Relocations"
        button={<Button text="Get a Qoute" mt="mt-6" />}
      />
      <Services />
      <Work />

      <MarqueeLine />

      <FAQs />
      <BlogsSection />
      <BookYourService />
      <Footer />
    </>
  );
}

export default ServicePage
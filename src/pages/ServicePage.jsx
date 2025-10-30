
import { Button } from "../Common/Button";
import Navbar from "../Common/Navbar"
import PagesHeading from "../Common/PagesHeading"
import Services from "../components/services";
import FAQs from "../components/FAQs";
import BlogsSection from "./BlogsSection";
import BookYourService from "../components/BookYourService";
import Footer from "../components/Footer";
import MarqueeLine from "../Common/MarqueeLine";


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

    <MarqueeLine/>

      <FAQs />
      <BlogsSection />
      <BookYourService />
      <Footer />
    </>
  );
}

export default ServicePage
import Navbar from "../Common/Navbar";
import BookYourService from "../components/BookYourService";
import Customer from "../components/Customer";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/services";
import Whytrust from "../components/Whytrust";
import Work from "../components/Work";
import Blogs from "./Blogs";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Whytrust />
      <Customer />
      <FAQs/>
      <Blogs/>
      <BookYourService/>
      <Footer/>
    </>
  );
};

export default Homepage;

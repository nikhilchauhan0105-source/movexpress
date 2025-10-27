import Navbar from "../Common/Navbar";
import Customer from "../components/Customer";
import FAQs from "../components/FAQs";
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
    </>
  );
};

export default Homepage;

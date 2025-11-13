import { useEffect } from "react";
import BlogsCardSection from "../Common/BlogsCardSection";
import { Topbutton } from "../Common/Helper";
import Navbar from "../Common/Navbar";
import PagesHeading from "../Common/PagesHeading";
import BookYourService from "../components/BookYourService";
import Footer from "../components/Footer";

const BlogsPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Navbar />
      <PagesHeading
        heading=" Our Blog and News"
        subheading="Whether you're looking for practical advice on maintaining a Smooth
          Moving"
      />
      <section className=" px-3">
        <BlogsCardSection />
      </section>

      <BookYourService rounded="rounded-xl" />
      <Footer />
      <Topbutton/>
    </>
  );
};

export default BlogsPage;

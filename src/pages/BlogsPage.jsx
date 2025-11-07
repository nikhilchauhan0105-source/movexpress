import BlogsCardSection from "../Common/BlogsCardSection";
import Navbar from "../Common/Navbar";
import PagesHeading from "../Common/PagesHeading";
import BookYourService from "../components/BookYourService";
import Footer from "../components/Footer";

const BlogsPage = () => {
  return (
    <>
      <Navbar />
      <PagesHeading
        heading=" Our Blog and News"
        subheading="Whether you're looking for practical advice on maintaining a Smooth
          Moving"
      />
      <section className="px-3">
        <BlogsCardSection />
      </section>

      <BookYourService rounded="rounded-xl" />
      <Footer />
    </>
  );
};

export default BlogsPage;

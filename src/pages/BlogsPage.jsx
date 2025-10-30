import BlogsCardSection from "../Common/BlogsCardSection";
import { BlogsSectioncard } from "../Common/Card";
import { BlogsSectiondetails } from "../Common/Data";

import Navbar from "../Common/Navbar";
import PagesHeading from "../Common/PagesHeading";
import BookYourService from "../components/BookYourService";
import Footer from "../components/Footer";

const BlogsPage = () => {
  return (
  <>
      <Navbar />
      <PagesHeading
        heading =" Our Blog and News"
        subheading="Whether you're looking for practical advice on maintaining a Smooth
          Moving"
      /> 
       <section className="px-3 sm:px-0 ">
      <BlogsCardSection />
      <BlogsCardSection />

      <div className="max-w-[1294px] mt-6 lg:mt-[72px]  mb-16 m-auto flex flex-wrap gap-6">
        {BlogsSectiondetails.map((items, index) => {
          if (index === 0) {
            return (
              <BlogsSectioncard
                image={items.image}
                head={items.head}
                text={items.text}
              />
            );
          }
        })}
      </div>
      <BookYourService rounded="rounded-xl" />
      <Footer />
    </section>
    </>
  );
};

export default BlogsPage;

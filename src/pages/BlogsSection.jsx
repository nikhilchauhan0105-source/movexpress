import { BlogsSectioncard } from "../Common/Card";
import { blogcarddetail } from "../Common/Data";
import { Heading } from "../Common/Heading";

const BlogsSection = () => {
  return (
    <section className="px-3 pt-[20px] lg:pt-[80px]">
      <Heading
        head="Read Our Blog and News"
        subhead="Whether you're looking for practical advice on maintaining a Smooth Moving"
      />

      <div
        data-aos="fade-up"
        className="max-w-[1294px]  mt-6 lg:mt-[72px] mb-16  m-auto grid gap-6  grid-col-1 md:grid-cols-3 "
      >
        {blogcarddetail.slice(0, 3).map((items, index) => (
          <BlogsSectioncard
            key={index}
            image={items.image}
            head={items.head}
            text={items.text}
            slug={items.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;

import { BlogsSectioncard } from "../Common/Card";
import { BlogsSectiondetails } from "../Common/Data";
import { Heading } from "../Common/Helper";

const BlogsSection = () => {
  return (
    <section  className="px-3 pt-[20px] lg:pt-[80px]">
      <Heading
        head="Read Our Blog and News"
        subhead="Whether you're looking for practical advice on maintaining a Smooth Moving"
      />

      <div className="max-w-[1294px] mt-6 lg:mt-[72px] mb-16 justify-center m-auto flex flex-wrap gap-6">
        {BlogsSectiondetails.map((items, index) => (
          <BlogsSectioncard
            key={index}
            image={items.image}
            head={items.head}
            text={items.text}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;

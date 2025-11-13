import { BlogsSectioncard } from "./Card";
import { blogcarddetail } from "./Data";

const BlogsCardSection = () => {
  return (
    <div className="max-w-[1294px] mt-6 lg:mt-[72px] mb-16 justify-center m-auto grid grid-cols-1  md:grid-cols-3  gap-6">
      {blogcarddetail.map((items, index) => (
        <BlogsSectioncard
          key={index}
          image={items.image}
          head={items.head}
          text={items.text}
          slug={items.slug}
        />
      ))}
    </div>
  );
};

export default BlogsCardSection;

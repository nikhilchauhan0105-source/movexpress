import { BlogsSectioncard } from "./Card";
import { blogsSectiondetails } from "./Data";

const BlogsCardSection = () => {
  return (
    <div className="max-w-[1294px] mt-6 lg:mt-[72px] mb-16 justify-center m-auto flex flex-wrap gap-6">
      {blogsSectiondetails.map((items, index) => (
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

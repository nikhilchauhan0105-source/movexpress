import { BlogsSectioncard } from "./Card"
import { BlogsSectiondetails } from "./Data"


const BlogsCardSection = () => {
  return (
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
  )
}

export default BlogsCardSection
import { Link } from "react-router"
import { ArrowUp } from "./Icons"


const FormButton = ({text,url }) => {
  return (
    <Link to={url}>
      <button   className="md:p-5 px-3 py-3 md:px-8 cursor-pointer bg-purple rounded-2xl text-white text-sm md:text-[18px] font-light items-center flex gap-2 mt-2 md:mt-8">
          {text} <ArrowUp/>
      </button>
    </Link>
  )
}

export default FormButton
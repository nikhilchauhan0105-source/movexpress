import { ArrowUp } from "./Icons"


const FormButton = ({text}) => {
  return (
    <>
    <button className="md:p-5 px-3 py-3 md:px-8 bg-purple rounded-2xl text-white text-sm md:text-[18px] font-light items-center flex gap-2 mt-2 md:mt-8">
        {text} <ArrowUp/>
    </button>
    </>
  )
}

export default FormButton
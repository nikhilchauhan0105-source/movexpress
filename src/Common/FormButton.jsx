import { ArrowUp } from "./Icons"


const FormButton = ({text}) => {
  return (
    <>
    <button className="p-4 px-8 bg-purple rounded-2xl text-white text-[18px] font-light flex gap-2 mt-8">
        {text} <ArrowUp/>
    </button>
    </>
  )
}

export default FormButton
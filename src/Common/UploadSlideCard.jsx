import FormButton from "./FormButton";
import { UploadImage } from "./Icons";

function UploadSlideCard({ width, height, label }) {
  return (
    <>
      <p className="text-purple font-medium leading-6 mb-2">{label}</p>
      <div
        className={` relative ${height}  px-4 border-dashed rounded-xl w-full flex flex-col items-center border-purple border-2 ${width}`}
      >
        <div className="absolute flex flex-col items-center top-[50%]  translate-y-[-50%] ">
          <UploadImage />
          <p className="text-purple font-medium">
            Click to Upload Front Side of Card
          </p>
        </div>
        <input type="file" className=" w-full h-full " accept="image/*" />
      </div>
      <FormButton 
      text="Next"/>
    </>
  );
}

export default UploadSlideCard;

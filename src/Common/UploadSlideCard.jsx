
import { useState } from "react";
import { UploadImage } from "./Icons";

function UploadSlideCard({ width, height, label }) {
  const [imageUpload ,setImageUpload] =useState("")
  const storeimage =(e)=>{
    setImageUpload(e.target.value);
  }
  console.log(imageUpload)
  return (
    <div className="flex flex-col">
      <p className="text-purple font-medium leading-6 mb-2">{label}</p>
      <div
        className={` relative ${height} px-4 border-dashed rounded-xl w-full flex flex-col items-center border-purple border-2 ${width}`}
      >
        <div className="absolute flex flex-col items-center top-[50%]  translate-y-[-50%] ">
          <UploadImage />
          <p className="text-purple font-medium">
            Click to Upload Front Side of Card
          </p>
        </div>
        <input
          type="file"
          value={imageUpload}
          onChange={storeimage}
          className="w-full h-full  opacity-1"
          accept="image/*"
        />
      </div>
    </div>
  );
}

export default UploadSlideCard;

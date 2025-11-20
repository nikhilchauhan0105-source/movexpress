import { Truck } from "lucide-react";
import { FormHeading, FormSubHeading } from "../Common/Heading"
import { useEffect } from "react";

const When = ({whichvan}) => {
    useEffect(() => {
       console.log(whichvan)
    }, [])
    
  return (
    <div>
      <FormHeading head="when ?" subhead="Pick your preferred date and time" />
      <div className="h-2 bg-gray-300 rounded-2xl mt-[10px]">
        <div className="max-w-[181px] w-full bg-purple h-2 rounded-2xl"></div>
      </div>
      <FormSubHeading
        head="When do you need us?"
        subhead="Select your preferred date and time for your move"
      />
      <div>
        <div>
          <Truck />
          <p >
            {whichvan}
             </p>
        </div>
      </div>
    </div>
  );
}

export default When
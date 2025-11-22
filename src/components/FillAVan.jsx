import { Truck } from "lucide-react"


const FillAVan = () => {
  return (
    <div className="py-8 bg-[#f6f7f9] text-center text-sm rounded-xl">
      <div className="bg-purple rounded-2xl max-w-fit m-auto mb-3  p-5">
        <Truck size={24} className="text-white" />
      </div>
      <p className="font-bold  ">Fill a Van Selected</p>
      <p className="text-black/40">
        Perfect choice! Proceed to select your assistance level.
      </p>
    </div>
  );
}

export default FillAVan
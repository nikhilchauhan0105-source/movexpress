import { Box, Plus } from "lucide-react";
import { additemslist } from "../Common/Data";
import { AddItemsList } from "../Common/Helper";

const AddItems = () => {
  return (
    <div>
      <div className="flex gap-2 items-center border-1  border-black/20 p-3 rounded-xl ">
        <div className="p-2 bg-purple rounded-lg ">
          <Box size={18} className="text-white" />
        </div>
        <input
          type="text"
          placeholder="search for items ...."
          className="w-full outline-none"
        />
      </div>

      <div className="mt-2 max-h-[240px]  font-inter grid grid-cols-1 custom-scrollbar gap-2 overflow-y-scroll">
        {additemslist.map((obj, index) => {
          return <AddItemsList key={index} item={obj.name} />;
        })}
      </div>
      <button className="border-1 flex font-medium items-center justify-center py-3 text-purple gap-2  mt-3 border-purple border-dashed rounded-xl w-full">
        <Plus size={15} /> Add custom items
      </button>
    </div>
  );
};

export default AddItems;

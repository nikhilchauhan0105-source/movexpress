import { Box, Plus } from "lucide-react";
import { additemslist } from "../Common/Data";
import { AddItemsList } from "../Common/Helper";
import { useContext } from "react";
import { ItemsqauntitesContext } from "../context/context";



const AddItems = () => {
  const { quantities } = useContext(ItemsqauntitesContext);
  
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
          return (
            <AddItemsList key={index} item={obj.name} quantity={obj.items} />
          );
        })}
      </div>
      <button className="border-1 flex font-medium items-center justify-center py-3 text-purple gap-2  mt-3 border-purple border-dashed rounded-xl w-full">
        <Plus size={15} /> Add custom items
      </button>

      <div className="w-full shadow-sm/30 rounded-xl max-h-[250px] custom-scrollbar overflow-y-scroll  bg-blue-300/10 mt-4 py-2 px-2 ">
        {Object.keys(quantities).map((category) => (
          <div
            className="max-w-[510px] rounded-xl p-4 m-auto bg-white shadow-sm/30 my-2"
            key={category}
          >
            {Object.keys(quantities[category]).map((item) => (
              <div className="flex my-1 items-center justify-between pr-10">
                <p className="text-sm" key={item}>
                  {item}
                </p>
                <span className="text-xs px-2 py-0.5 shadow-amber-600  shadow-xs/40  rounded-lg">
                  {quantities[category][item]}
                </span>
              </div>
            ))}
            <h3 className="text-xs text-textlight">{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddItems;

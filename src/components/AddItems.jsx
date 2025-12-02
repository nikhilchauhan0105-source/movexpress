import { Box, Plus, X } from "lucide-react";
import { additemslist } from "../Common/Data";
import { AddItemsList } from "../Common/Helper";
import { useContext, useState } from "react";
import { informationContext } from "../context/context";

const AddItems = () => {
  const { quantities, setQuantities } = useContext(informationContext);

  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="flex gap-2 items-center border-1  border-black/20 p-3 rounded-xl ">
        <div className="p-2 bg-purple rounded-lg ">
          <Box size={18} className="text-white" />
        </div>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
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
      <button className="border-1 flex font-medium items-center justify-center py-3 text-purple gap-2  my-3 border-purple border-dashed rounded-xl w-full">
        <Plus size={15} /> Add custom items
      </button>

      <div className="w-full shadow-sm/30 rounded-xl max-h-[200px] custom-scrollbar overflow-y-scroll  bg-blue-300/10 mt-4 py-2 px-2 ">
        {Object.keys(quantities).map((category) => {
          const hasQuantity = Object.values(quantities[category]).some(
            (qty) => qty > 0
          );

          if (!hasQuantity) return null;
          return (
            <div
              className="max-w-[510px] relative  rounded-xl p-2  sm:p-2 sm:px-4 m-auto bg-white shadow-sm/30 my-2"
              key={category}
            >
              <button className="absolute cursor-pointer right-1.5 shadow-xs/30 shadow-amber-600 rounded-sm p-0.5 top-1.5 ">
                <X
                  size={12}
                  onClick={() => {
                    const updated = { ...quantities };
                    Object.keys(updated[category]).forEach((item) => {
                      updated[category][item] = 0;
                    });
                    setQuantities(updated);
                  }}
                  className="text-vinegar rounded-full"
                />
              </button>
              {Object.keys(quantities[category]).map((item) => {
                if (quantities[category][item] <= 0) return null;

                return (
                  <div
                    className="flex  my-1 items-center  justify-between pr-6"
                    key={item}
                  >
                    <p className="text-xs sm:text-xs">{item}</p>
                    <span className="text-[8px] sm:text-xs sm:px-2  px-1 sm:py-0.5 shadow-amber-600 shadow-xs/40 rounded-xs sm:rounded-sm">
                      {quantities[category][item]}
                    </span>
                  </div>
                );
              })}

              <h3 className="text-xs text-textlight">{category}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddItems;

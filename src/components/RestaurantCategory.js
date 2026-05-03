import { FaArrowAltCircleDown } from "react-icons/fa";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(true);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-full sm:w-8/12 mx-auto my-4 sm:my-6 p-3 sm:p-4 shadow-md sm:shadow-lg bg-gray-100 rounded-lg">

      {/* Accordion header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick} >
      
        <span className="text-base sm:text-lg font-bold text-left">
          {data?.title} ({data?.itemCards?.length})
        </span>

        <span
          className={`text-xl transition-transform duration-300 ${
            showItems ? "rotate-180" : "rotate-0"
          }`}
        >
          <FaArrowAltCircleDown />
        </span>
      </div>

      {/* Accordion body */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          showItems ? "max-h-[1000px] mt-3" : "max-h-0"
        }`}
      >
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;



import { addItem } from "../utils/cartSlice";
import { CDN_IMG } from "../utils/constant";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
      //dispatch an action
      dispatch(addItem(item));
     };

  return (
    <div>
      {items.map((item) => {
        const info = item?.card?.info;

        return (
          <div
            key={info?.id}
            className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between gap-4"
          >

            {/* Left section */}
            <div className="sm:w-9/12">
              <div className="font-semibold text-sm sm:text-base">
                <span>{info?.name}</span>
                <span className="ml-2">
                  - ₹
                  {info?.price ? info.price / 100 : info?.defaultPrice / 100}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
                {info?.description}
              </p>
            </div>

            {/* Right section */}
            <div className="sm:w-3/12 flex flex-col items-center sm:items-end relative">
              
              <img
                src={CDN_IMG + info?.imageId}
                className="w-full sm:w-[120px] rounded-md"
              />

              <button className="mt-2 sm:absolute sm:bottom-2 sm:right-2 bg-white text-green-600 font-bold px-4 py-1 rounded-lg shadow-md"
                      onClick={() => handleAddItem(item)}>
                Add +
              </button>

            </div>
          </div>
        );
      })}
    </div>
  );
};


    

export default ItemList;
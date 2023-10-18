import { IMG_CDN } from "./utils/constant";
import { TbStarFilled } from "react-icons/tb";

const RestaurantCard = ({name, cuisines, cloudinaryImageId, avgRating, areaName, locality}) => {
    return (
      <div className="w-[250px] h-[325px]  border shadow-xl rounded-lg p-2 gap-1 hover:scale-105  overflow-hidden">
     
        <img src={ IMG_CDN + cloudinaryImageId }
        className=" rounded-lg"/>
        <div className="font-bold text-lg font-sans">{name}</div>
        <div className="text-xs font-sans">{cuisines.join(", ")}</div>
        <div className="py-0.5 text-sm"> < TbStarFilled />{ avgRating}</div>
        <div className="font-semibold font-sans text-sm">{locality} </div>
        
      </div>
    );
  };

  export default RestaurantCard
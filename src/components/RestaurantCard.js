import { CDN_IMG } from "../utils/constant";
import { FaStar } from "react-icons/fa";


const RestaurantCard = ( {name, cuisines, cloudinaryImageId, avgRating, areaName, costForTwo, sla} ) => {

    
    return (
        <div className="p-3 w-full sm:w-[280px] md:w-[300px] border shadow-xl rounded-xl gap-2 bg-white dark:bg-gray-500 dark:text-white hover:scale-105 duration-300 overflow-hidden">
       
          <img 
              className="h-[180px] w-full object-cover rounded-lg" 
              src={CDN_IMG + cloudinaryImageId} 
              alt={name} 
          />
          <div className="font-bold text-lg">{name}</div>
          
          <div className="text-sm text-gray-600 dark:text-gray-300"> 
              { cuisines.join(" ,").length > 35 ? 
               (cuisines.join(",").substr(0,35)) + "..." : 
               cuisines.join(",")} 
          </div>

          <div className="font-semibold text-sm font-sans">{areaName}</div>
          
          <div className="flex mt-5 justify-around text-black" >

            <span className="bg-green-500 flex items-center gap-1 text-white rounded-lg px-2 py-1">
               <FaStar />
               {avgRating}
            </span> 
            
            <span className="text-xl font-bold">|</span>
            <span>{sla?.lastMileTravelString}</span>
            <span className="text-xl font-bold">|</span>
            <span>{costForTwo}</span>
          </div>
          
          
        </div>
      );
    };

export default RestaurantCard;
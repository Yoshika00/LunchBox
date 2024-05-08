import { CDN_IMG } from "../utils/constant";
import { FaStar } from "react-icons/fa";


const RestaurantCard = ( {name, cuisines, cloudinaryImageId, avgRating, areaName, costForTwo, sla} ) => {

    
    return (
        <div className="p-2 m-2  w-[220px] border shadow-xl rounded-lg gap-1 bg-gray-200 hover:scale-105  overflow-hidden">
       
          <img className="h-[130px] w-[230px] rounded-lg" src={CDN_IMG + cloudinaryImageId} />
          <div className="font-bold text-lg font-sans">{name}</div>
          
          <div className="py-0.5 text-xs"> { cuisines.join(" ,")} </div>
          <div className="font-bold text-xs font-sans">{areaName}</div>
          <span className="flex mt-5 justify-around text-black" >
            <span className="bg-green-500 flex justify-center gap-1 text-white rounded-lg p-1 text-sm">
              <span className="pt-1"><FaStar /></span>
              <span>{avgRating}</span>
            </span> 
            
            <h4 className="text-xl font-bold">|</h4>
            <h4 className="text-sm pt-1">{sla?.lastMileTravelString}</h4>
            <h4 className="text-xl font-bold">|</h4>
            <h4 className="text-sm pt-1">{costForTwo}</h4>
          </span>
          
          
        </div>
      );
    };

export default RestaurantCard;
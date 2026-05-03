
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_IMG } from "../utils/constant";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const restInfo = useRestaurantMenu(resId);

    
    if (!restInfo) return <ShimmerUI />

    const info = restInfo?.cards[2]?.card?.card?.info;

    if (!info) return <ShimmerUI />;

    const { name, cuisines, areaName, totalRatingsString, cloudinaryImageId, sla } = info;

    
    //console.log(restInfo);
    const categories = restInfo?.cards
               ?.find(card => card.groupedCard)
               ?.groupedCard?.cardGroupMap?.REGULAR?.cards
               ?.filter((c) => c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


    return ( 
        
        <div>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 sm:gap-x-6 bg-gradient-to-b from-green-600 to-green-50 text-black w-full p-3 sm:p-5 shadow-md">
                      
                          <img className="h-[100px] sm:h-[130px] w-auto rounded-md" 
                               src={ CDN_IMG + cloudinaryImageId} />

                          <div className="">
                              <h1 className="font-bold text-lg sm:text-2xl">{name}</h1>
                              <p className="text-xs sm:text-sm">Cuisines : {cuisines.join(", ")}</p>
                              <div className="text-md mt-6 font-bold">
                                  <p>{areaName}, {sla?.slaString}</p>
                                  <p>Ratings : {totalRatingsString}</p>
                              </div>
                            </div>
                   </div>  
           
           {/* Categories accordion */},

           { !categories ? <ShimmerUI /> :
           categories.map((category) => (
            <RestaurantCategory 
                data={category?.card?.card} 
                key={category?.card?.card?.title}
                 />
           ))}
           
        </div>

        )
    
}

export default RestaurantMenu;
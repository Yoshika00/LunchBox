
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_IMG } from "../utils/constant";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const restInfo = useRestaurantMenu(resId);

    
    if (restInfo === null) return <ShimmerUI />

    const {name, cuisines, areaName, totalRatingsString, cloudinaryImageId,sla } =  restInfo.cards[2]?.card?.card?.info;


    const categories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    //console.log(restInfo);


    return ( 
        <div className="text-center pt-4">
           

                  <div className="  flex justify-center gap-x-4 font-sans  bg-gradient-to-b from-green-600 to-green-50  mx-auto text-black w-[100%] p-3 shadow-md">
                      
                          <img className="h-[130px] w-auto rounded-md" src={ CDN_IMG + cloudinaryImageId} />
                          <div className="">
                              <h1 className="font-bold  text-2xl ">{name}</h1>
                              <p className="text-xs">Cuisines : {cuisines.join(", ")}</p>
                              <div className="text-md mt-6 font-bold">
                                  <p>{areaName}, {sla?.slaString}</p>
                                  <p>Ratings : {totalRatingsString}</p>
                              </div>
                            </div>
                   </div>  
           
           {/* Categories accordion */}

           { categories === null ? <ShimmerUI /> :
           categories.map((category) => (
            <RestaurantCategory 
                data={category?.card?.card} 
                key={category?.card?.card?.title}
                 />
           ))}
           

        </div>)
    
}

export default RestaurantMenu;
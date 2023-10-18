import { useParams } from "react-router-dom"
import ShimmerUi from "./ShimmerUi";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import React from "react";
import RestaurantCategory from "./RestaurantCategory";
import { IMG_CDN } from "./utils/constant";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const restaurant = useRestaurantMenu(resId)

    if(restaurant === null) return <ShimmerUi />
    console.log(restaurant);

    const {name,areaName,cuisines,cloudinaryImageId, totalRatingsString, sla} = restaurant?.cards[0]?.card?.card?.info;

    const categories =  restaurant?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( 
    c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   console.log("before");
   console.log(categories);
   console.log("after");
   
    return (
         <div >
                   <div className="  flex justify-center gap-x-4 font-sans  bg-gradient-to-b from-green-500 to-green-50  mx-auto text-black w-[100%] p-3 shadow-md">
                      
                          <img className="h-[130px] w-auto rounded-md" src={ IMG_CDN + cloudinaryImageId} />
                          <div className="">
                              <h1 className="font-bold  text-2xl ">{name}</h1>
                              <p className="text-xs">Cuisines : {cuisines.join(", ")}</p>
                              <div className="text-md mt-6">
                                  <p>{areaName}, {sla?.slaString}</p>
                                  <p>Ratings : {totalRatingsString}</p>
                              </div>
                            </div>
                     </div>

               {/* Categories Accordions */}

               { 
               categories.map( category => <RestaurantCategory data={category?.card?.card} key={category?.card?.card?.title}/> )
               }
            </div>
    )
}

export default RestaurantMenu;
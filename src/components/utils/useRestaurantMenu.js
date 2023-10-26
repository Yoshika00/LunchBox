import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {

        const data = await fetch(MENU_API + resId )
        const json = await data.json();
        //console.log(json.data);
        setRestaurant(json.data)
    }
 
    return restaurant;
}

export default useRestaurantMenu;
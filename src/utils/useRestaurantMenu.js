import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    const fetchData = async () => {
        try {
            const data = await fetch(MENU_API + resId);
            const json = await data.json();
            console.log(json);

            setResInfo(json?.data);
        } 
        catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [resId]);

    return resInfo;
};

export default useRestaurantMenu;
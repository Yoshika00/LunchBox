import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaSearch } from "react-icons/fa";
import { RESTAURANT_API } from "../utils/constant";

 
const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")
    const [errorMessage, setErrorMessage] = useState("");

    function filterData(searchText, listOfRestaurant) {
      const filteredRestaurant = listOfRestaurant.filter(
        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      return filteredRestaurant;
    }

    useEffect( () => {
        fetchData()
    },[]);

    const fetchData = async () => {
       const data = await fetch(RESTAURANT_API);
       const json = await data.json();

       const restaurants =
          json?.data?.cards
          ?.find(
         (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
         )
        ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

     setListOfRestaurant(restaurants);
     setFilteredRestaurant(restaurants);
    };

    const searchData = (searchText, listOfRestaurant) => {
        if (searchText !== "") {
          const filteredData = filterData(searchText, listOfRestaurant);
          setFilteredRestaurant(filteredData);
          setErrorMessage("");
          if (filteredData?.length === 0) {
            setErrorMessage(
              `Sorry, we couldn't find any results for "${searchText}"`
            );
          }
        } else {
          setErrorMessage("");
          setFilteredRestaurant(listOfRestaurant);
        }
      }; 

    //console.log(listOfRestaurant);

    const onlineStatus = useOnlineStatus();
    

    if (!onlineStatus) {
       return (
         <div className="flex justify-center items-center h-screen bg-gray-100 ">
             <h1 className="text-xl font-semibold text-red-500 text-center">
               🚫 You are offline. Please check your internet connection 🙏.
             </h1>
         </div>
       );
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="flex flex-col sm:flex-row justify-center p-2">
                <input 
                   className="border w-full sm:w-1/2 p-3 rounded-lg shadow-md dark:bg-gray-800 dark:text-white"
                   type="text" 
                   placeholder="Search Restaurants...."
                   value={searchText}
                   onChange={(e) => {
                    setSearchText(e.target.value)
                    searchData(e.target.value, listOfRestaurant) }}>
                </input>

                
               

                {/*<button 
                   onClick={() => {
                    searchData(searchText, listOfRestaurant);
                   }} >
                    Search
                  </button> */}
            </div>

            { errorMessage && <div className="text-center text-black text-lg font-bold">{errorMessage}</div>}

           {/* <button onClick={ () => {
                const filteredData = listOfRestaurant.filter(
                    (res) => res?.info?.avgRating > 4);
                setFilteredRestaurant(filteredData); 
                console.log(filteredData);
            }}
          >Top Rated Restaurants</button> */}

            

            <div className="flex flex-wrap justify-center gap-4 p-4 w-10/12 m-auto">
                {filteredRestaurant?.map((restaurant) => (
                    <Link 
                          key={restaurant?.info?.id} 
                          to={"/restaurants/" + restaurant?.info?.id} >

                          <RestaurantCard  {...restaurant?.info} />
                    </Link>
                ))
                }
                
            </div>
        </div>
      );
  };

export default Body;
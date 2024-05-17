import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaSearch } from "react-icons/fa";

 
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
    },[])

    const fetchData =  async () => {
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002")
       const json = await data.json();
       
       setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    
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
    if(onlineStatus === false) return <h1>Looks like you are offline...!!! Check your internet connection 🙏</h1>

    return (
        <div className="">
            <div className="flex justify-center">
                <input 
                   className="border w-1/3  my-4 shadow-md rounded-sm p-2 focus:border-blue-500
                   disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 "
                   type="text" 
                   placeholder="Search for Restaurants...."
                   value={searchText}
                   onChange={(e) => {
                    setSearchText(e.target.value)
                    searchData(e.target.value, listOfRestaurant) }}>
                </input>
                <button className="border border-solid text-white p-3  my-3 rounded-sm bg-green-600" ><FaSearch /></button>

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
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
                       <RestaurantCard  {...restaurant?.info} />
                    </Link>
                ))}
                
            </div>
        </div>
    )
}

export default Body;
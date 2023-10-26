import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import { filterData } from "./utils/helper"



const Body = () => {
    
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] =useState([]);
    const [errorMessage, setErrorMessage] = useState("");
   

    useEffect(()=>{
        getRestaurants();
    },[])


    async function getRestaurants() {
      
      try {
        const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002`);
        const json = await data.json();
        const dummydata = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7272832&lng=77.3370089&restaurantId=229")
        console.log(await dummydata.json());
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
  
            // initialize checkData for Swiggy Restaurant data
            let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
            // if checkData is not undefined then return it
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }
  
        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(json);
  
        // update the state variable restaurants with Swiggy API data
        setAllRestaurants(resData);
        setFilteredRestaurants(resData);
      } 
      catch (error) {
        console.log(error);
      }
    }


   { /*async function getRestaurants() {
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002`);
                               
        
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }*/}

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like you are offline...!!! Check your internet connection 🙏</h1>


    console.log("render");

    const searchData = (searchText, restaurants) => {
        if (searchText !== "") {
          const filteredData = filterData(searchText, restaurants);
          setFilteredRestaurants(filteredData);
          setErrorMessage("");
          if (filteredData?.length === 0) {
            setErrorMessage(
              `Sorry, we couldn't find any results for "${searchText}"`
            );
          }
        } else {
          setErrorMessage("");
          setFilteredRestaurants(restaurants);
        }
      };
    
   
     //not render components (early return)
    if(!allRestaurants) return <ShimmerUi/>

      


    return (
        allRestaurants?.length === 0 ? (<ShimmerUi/>) : (
    <>
        <div className="flex items-center justify-center">
            <input 
            type="text" 
            className="border border-black w-1/3 text-black font-bold placeholder:font-bold placeholder:text-black m-4 py-1 rounded-lg text-center" 
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
            //e.target.value -> whatever you write in input
            setSearchText(e.target.value)
            searchData(e.target.value, allRestaurants)
            }} />

            
           
           <button className="px-4 py-1 bg-green-300 rounded-lg font-bold"
           onClick = {() => {
           //filter the data
           searchData(searchText, allRestaurants)
           }} > Search</button>

           <button className="px-4 py-1 bg-green-300 m-4 rounded-lg font-bold"
              onClick = {() => {
              const filteredList = allRestaurants.filter((res) => res?.info?.avgRating > 4) 
              console.log("hi", filteredList);
              setFilteredRestaurants(filteredList)
            }}>Top Rated Restaurants</button>
  
        </div>
         
        {errorMessage && <div>{errorMessage}</div>}
        

        <div className='flex gap-4 p-4 w-10/12 flex-wrap  mx-auto '>
        
          
         {filteredRestaurants.map((restaurant) => (
            <Link 
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id} >
               <RestaurantCard {...restaurant?.info}  />
            </Link>
              
         ))}
        
        </div>
    </>
    
    )
    )
}

export default Body



export const filterData = (searchText, allRestaurants) =>  {
    const filterData =  allRestaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );

    return filterData;
}

// Filter the restaurant data according input type
//export const filterData = (searchText, restaurants) => {
//   const resFilterData = restaurants.filter((restaurant) =>
  //    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    //);
    //return resFilterData;
  //}
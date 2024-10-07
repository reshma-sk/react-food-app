import {useState,useEffect} from "react";
import { SWIGGY_API_URL } from "../utils/constants";

const useRestaurantData = ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const fetchRestaurantsData = async () => {
      
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
      const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants;
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchRestaurantsData();
  }, []);
    
    return [listOfRestaurants,filteredRestaurants,setFilteredRestaurants]
}
export default useRestaurantData;
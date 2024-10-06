import {useState,useEffect} from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId)=>{
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const fetchMenusData = async () => {
      try {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setRestaurantInfo(json?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  };

  useEffect(() => {
    fetchMenusData();
  }, []);
    
    
    return restaurantInfo;
}
export default useRestaurantMenu;
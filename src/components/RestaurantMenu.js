import React,{ useState } from "react";
import { MENU_URL,CDN_URL } from "../utils/constants";
import { RestaurantMenuShimmer } from "./Shimmer";
import { MdStarRate } from "react-icons/md";
import { useParams } from "react-router-dom";
import "../styles/RestaurantMenu.css";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId)
  const [showIndex, setShowIndex] = React.useState(0);

  if (restaurantInfo === null) {
    return <RestaurantMenuShimmer />;
  }
  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    locality,
    sla,
  } = restaurantInfo?.cards[2]?.card?.card?.info || {};

  const cards =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = cards.filter(
    (c) =>
      c?.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="w-[90%] flex flex-col m-14">
      <div className="m-8 text-center text-lg font-bold"><h1>Menu</h1></div>
      
      <div>
        {categories.map((category, index) => (
        // Controlled Component
        <RestaurantMenuCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showMenuItems={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
      </div>
     
      
    </div>
  );
};

export default RestaurantMenu;
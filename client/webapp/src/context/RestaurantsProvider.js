import React, { useState, createContext } from "react";
import { getRestaurants } from "../api/restaurant";
import { useNotification } from "../hooks";

export const RestaurantContext = createContext();

const limit = 10;
let currentPageNo = 0;

const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [latestUploads, setLatestUploads] = useState([]);
  const [reachedToEnd, setReachedToEnd] = useState(false);

  const { updateNotification } = useNotification();

  const fetchLatestUploads = async (qty = 5) => {
    const { error, restaurants } = await getRestaurants(0, qty);
    if (error) return updateNotification("error", error);

    setLatestUploads([...restaurants]);
  };

  const fetchRestaurants = async (pageNo = currentPageNo) => {
    const { error, restaurants } = await getRestaurants(pageNo, limit);
    if (error) updateNotification("error", error);

    if (!restaurants.length) {
      currentPageNo = pageNo - 1;
      return setReachedToEnd(true);
    }

    setRestaurants({ ...restaurants });
  };

  const fetchNextPage = () => {
    if (reachedToEnd) return;
    currentPageNo += 1;
    fetchRestaurants(currentPageNo);
  };

  const fetchPrevPage = () => {
    if (currentPageNo <= 0) return;
    if (reachedToEnd) setReachedToEnd(false);

    currentPageNo -= 1;
    fetchRestaurants(currentPageNo);
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        latestUploads,
        fetchLatestUploads,
        fetchRestaurants,
        fetchNextPage,
        fetchPrevPage,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantsProvider;

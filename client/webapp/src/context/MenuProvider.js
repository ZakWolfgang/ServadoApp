import React, { useState, createContext } from "react";
import { getMenu } from "../api/menu";
import { useNotification } from "../hooks";

export const MenuContext = createContext();

const limit = 10;
let currentPageNo = 0;

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [latestUploads, setLatestUploads] = useState([]);
  const [reachedToEnd, setReachedToEnd] = useState(false);

  const { updateNotification } = useNotification();

  const fetchLatestUploads = async (qty = 5) => {
    const { error, menu } = await getMenu(0, qty);
    if (error) return updateNotification("error", error);

    setLatestUploads([...menu]);
  };

  const fetchMenu = async (pageNo = currentPageNo) => {
    const { error, menu } = await getMenu(pageNo, limit);
    if (error) updateNotification("error", error);

    if (!menu.length) {
      currentPageNo = pageNo - 1;
      return setReachedToEnd(true);
    }

    setMenu([...menu]);
  };

  const fetchNextPage = () => {
    if (reachedToEnd) return;
    currentPageNo += 1;
    fetchMenu(currentPageNo);
  };

  const fetchPrevPage = () => {
    if (currentPageNo <= 0) return;
    if (reachedToEnd) setReachedToEnd(false);

    currentPageNo -= 1;
    fetchMenu(currentPageNo);
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        latestUploads,
        fetchLatestUploads,
        fetchMenu,
        fetchNextPage,
        fetchPrevPage,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;

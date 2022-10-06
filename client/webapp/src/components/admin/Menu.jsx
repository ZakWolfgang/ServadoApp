import React, { useEffect, useState } from "react";
import { useMenu, useNotification } from "../../hooks";
import MenuItemList from "../MenuItemList";
import NextAndPrevButton from "../NextAndPrevButton";

const limit = 10;
let currentPageNo = 0;

export default function Menu() {
  const [menu, setMenu] = useState([]);

  const { updateNotification } = useNotification();
  const { fetchMenu, menu: newMenu, fetchPrevPage, fetchNextPage } = useMenu();

  const handleUIUpdate = () => {
    fetchMenu();
  };

  useEffect(() => {
    fetchMenu(currentPageNo);
  }, []);

  return (
    <>
      <div className="space-y-3 p-5">
        {newMenu.map((menuItem) => {
          return (
            <MenuItemList
              key={menuItem.id}
              menuItem={menuItem}
              afterDelete={handleUIUpdate}
              afterUpdate={handleUIUpdate}
            />
          );
        })}

        <NextAndPrevButton
          className="mt-5"
          onNextClick={fetchNextPage}
          onPrevClick={fetchPrevPage}
        />
      </div>
    </>
  );
}

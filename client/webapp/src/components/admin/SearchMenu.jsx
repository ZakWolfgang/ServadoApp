import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMenuItemForAdmin, updateMenuItem } from "../../api/menu";
import { useNotification } from "../../hooks";
import MenuItemList from "../MenuItemList";
import NotFoundText from "../NotFoundText";

export default function SearchMenu() {
  const [menu, setMenu] = useState([]);
  const [resultNotFound, setResultNotFound] = useState(false);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("name");

  const { updateNotification } = useNotification();

  const searchMenu = async (val) => {
    const { error, results } = await searchMenuItemForAdmin(val);
    if (error) return updateNotification("error", error);

    if (!results.length) {
      setResultNotFound(true);
      return setMenu([]);
    }

    setResultNotFound(false);
    setMenu([...results]);
  };

  const handleAfterDelete = (menuItem) => {
    const updatedMenu = menu.filter((m) => m.id !== menuItem.id);
    setMenu([...updatedMenu]);
  };

  const handleAfterUpdate = (menuItem) => {
    console.log("run");
    const updatedMenu = menu.map((m) => {
      if (m.id === menuItem.id) return menuItem;
      return m;
    });
    setMenu([...updatedMenu]);
  };

  useEffect(() => {
    if (query.trim()) searchMenu(query);
  }, [query]);

  return (
    <div className="p-5 space-y-3">
      <NotFoundText text="Record not found!" visible={resultNotFound} />
      {!resultNotFound &&
        menu.map((menuItem) => {
          return (
            <MenuItemList
              menuItem={menuItem}
              key={menuItem.id}
              afterDelete={handleAfterDelete}
              afterUpdate={handleAfterUpdate}
            />
          );
        })}
    </div>
  );
}

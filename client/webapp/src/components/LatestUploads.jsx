import React, { useState, useEffect } from "react";
import { useMenu } from "../hooks";
import MenuItemList from "./MenuItemList";

const pageNo = 0;
const limit = 5;

export default function LatestUploads() {


  const { fetchLatestUploads, latestUploads } = useMenu();

  const handleUIUpdate = () => fetchLatestUploads();

  useEffect(() => {
    fetchLatestUploads();
  }, []);

  return (
    <>
      <div className="bg-white shadow dark:shadow dark:bg-secondary p-5 rounded col-span-2">
        <h1 className="font-semibold text-2xl mb-2 text-primary dark:text-white">
          Recent Uploads
        </h1>

        <div className="space-y-3">
          {latestUploads.map((menuItem) => {
            return (
              <MenuItemList
                key={menuItem.id}
                menuItem={menuItem}
                afterDelete={handleUIUpdate}
                afterUpdate={handleUIUpdate}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

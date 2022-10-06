import React from "react";
import AppInfoBox from "../AppInfoBox";
import LatestUploads from "../LatestUploads";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      <AppInfoBox name="Total Uploads" subTitle="100" />
      <AppInfoBox name="Total Reviews" subTitle="1,500" />
      <AppInfoBox name="Total Reviews" subTitle="1,500" />
      <AppInfoBox name="Total Users" subTitle="200" />

      <LatestUploads />
    </div>
  );
}

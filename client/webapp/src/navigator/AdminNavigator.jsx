import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/admin/Dashboard";
import Header from "../components/admin/Header";
import Menu from "../components/admin/Menu";
import Navbar from "../components/admin/Navbar";
import SearchMenu from "../components/admin/SearchMenu";
import MenuUpload from "../components/admin/MenuUpload";
import NotFound from "../components/NotFound";

export default function AdminNavigator() {
  const [showMenuUploadModal, setShowMenuUploadModal] = useState(false);

  const displayMenuUploadModal = () => {
    setShowMenuUploadModal(true);
  };

  const hideMenuUploadModal = () => {
    setShowMenuUploadModal(false);
  };

  return (
    <>
      <div className="flex dark:bg-primary bg-white">
        <Navbar />
        <div className="flex-1 max-w-screen-xl">
          <Header onAddMenuItemClick={displayMenuUploadModal} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/search" element={<SearchMenu />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <MenuUpload visible={showMenuUploadModal} onClose={hideMenuUploadModal} />
    </>
  );
}

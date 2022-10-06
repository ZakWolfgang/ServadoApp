import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./LoggedIn/Home";
import LoggedNav from "./Navigation/LoggedNav";
import Menu from "./LoggedIn/Menu";
import SearchMenu from "./components/admin/SearchMenu";
import MenuUpload from "./components/admin/MenuUpload";

function LoggedIn() {

    const [showMenuUploadModal, setShowMenuUploadModal] = useState(false);

    const hideMenuUploadModal = () => {
        setShowMenuUploadModal(false);
    };

    return (
        <div>
            <LoggedNav/>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/menu" element={<Menu />} />
            </Routes>

            <MenuUpload visible={showMenuUploadModal} onClose={hideMenuUploadModal} />
        </div>
    );
}

export default LoggedIn;
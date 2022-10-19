import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./LoggedIn/Home";
import LoggedNav from "./Navigation/LoggedNav";
import Menu from "./LoggedIn/Menu";
import Profile from './LoggedIn/Profile'
import MenuUpload from "./components/admin/MenuUpload";

function LoggedIn() {


    const [showMenuUploadModal, setShowMenuUploadModal] = useState(false);

    const hideMenuUploadModal = () => {
        setShowMenuUploadModal(false);
    };

    return (
        <div className='app'>
            <LoggedNav/>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/menu" element={<Menu />} />
            </Routes>
            <Routes>
                <Route path="/profile" element={<Profile />}/>
            </Routes>

        </div>
    );
}

export default LoggedIn;
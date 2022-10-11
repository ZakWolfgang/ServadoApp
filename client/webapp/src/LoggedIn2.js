import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./LoggedIn/Home";
import LoggedNav from "./Navigation/LoggedNav";
import Restaurants from './LoggedIn/Restaurants';

function LoggedIn2() {


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
                <Route path="/menu" element={<Restaurants />} />
            </Routes>

        </div>
    );
}

export default LoggedIn2;
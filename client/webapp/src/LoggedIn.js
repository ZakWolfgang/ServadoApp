import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./LoggedIn/Home";
import LoggedNav from "./Navigation/LoggedNav";
import Menu from "./LoggedIn/Menu";
import Profile from './LoggedIn/Profile'

function LoggedIn() {

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
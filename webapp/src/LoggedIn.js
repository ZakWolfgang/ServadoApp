import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./LoggedIn/Home";
import LoggedNav from "./Navigation/LoggedNav";
import Menu from "./LoggedIn/Menu";

function LoggedIn() {
    return (
        <div>
            <LoggedNav/>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </div>
    );
}

export default LoggedIn;
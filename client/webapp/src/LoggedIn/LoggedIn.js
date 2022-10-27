import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import LoggedNav from "../Navigation/LoggedNav";
import Menu from "./Menu";
import Profile from './Profile'
import {useNavigate} from "react-router-dom";

function LoggedIn() {

    const nav = useNavigate()
    useEffect(() =>{
        nav('/home')
    },[])

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
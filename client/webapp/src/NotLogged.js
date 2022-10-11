import React, {useEffect, useState} from 'react';
import {
    Routes,
    Route, useNavigate
} from "react-router-dom"
import Login from './NotLoggedIn/Login'
import Signup from './NotLoggedIn/Signup'
import Landing from "./Landing";

function NotLogged() {

    const navigate = useNavigate()

    useEffect(() => {
        navigate('/signin')
    })

    return (
        <div>
            <Landing/>
            <Routes>
                <Route path="/signin" element={<Login />} />
            </Routes>
            <Routes>
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
}

export default NotLogged;
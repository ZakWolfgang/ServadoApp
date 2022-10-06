import './App.css'
import LoggedIn from './LoggedIn'
import LoggedIn2 from './LoggedIn2'
import React, {useEffect, useState} from "react";
import { useAuth } from "./hooks";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import './Landing.css'
import Nav from "react-bootstrap/Nav";
import Login from "./NotLoggedIn/Login";
import Signup from "./NotLoggedIn/Signup";
import Landing from "./Landing";

function App() {


    const {handleLogin, authInfo} = useAuth();
    const {isPending, isLoggedIn} = authInfo;
    const navigate = useNavigate();

    const isAdmin = authInfo.profile?.role === ("admin");

        if (isLoggedIn) return <LoggedIn/>
    
    return (
        <>
        <div className='app'>
            <Landing/>
                <div className='inner'>
                    <Routes>
                        <Route path="/signin" element={<Login />} />
                    </Routes>
                    <Routes>
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </div>
        </div>
        </>
    );
}
export default App;

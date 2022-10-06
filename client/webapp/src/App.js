import './App.css'
import LoggedIn from './LoggedIn'
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

    const isAdmin = authInfo.profile?.role === ("admin" || "user");

    if (isLoggedIn) return <LoggedIn/>

    return (
        <>
            <Landing/>
                <div className='inner'>
                    <Routes>
                        <Route path="/signin" element={<Login />} />
                    </Routes>
                    <Routes>
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </div>

        </>
    );
}
export default App;

/*
{ (isAdmin) ? (
            <LoggedIn/>
        ) : (
            <NotLogged/>
        )}
 */
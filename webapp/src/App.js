import './App.css'
import LoggedIn from './LoggedIn'
import LoggedIn2 from './LoggedIn2'
import React, {useEffect, useState} from "react";
import { useAuth } from "./hooks";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import './Landing.css'
import Nav from "react-bootstrap/Nav";
import Login from "./NotLoggedIn/Login";
import SignupPage from "./NotLoggedIn/SignupPage";
import Landing from "./Landing";
import homepic from './Pictures/homepic.jpg'
import SigninPage from './NotLoggedIn/SigninPage';

function App() {


    const {handleLogin, authInfo} = useAuth();
    const {isPending, isLoggedIn} = authInfo;
    const navigate = useNavigate();

    const isAdmin = authInfo.profile?.role === ("admin");

        if (isLoggedIn) return <LoggedIn/>
    
    return (
        <>
            <div className='app'>
                <Routes>
                    <Route path="/signin" element={<SigninPage />} />
                </Routes>
                <Routes>
                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </div>
        </>
    );
}
export default App;

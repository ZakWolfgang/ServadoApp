import './App.css'
import LoggedIn from './LoggedIn'
import React from "react";
import { useAuth } from "./hooks";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import SignupPage from "./NotLoggedIn/SignupPage";
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
                    <Route path="/" element={<SigninPage />} />
                </Routes>
                <Routes>
                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </div>
        </>
    );
}
export default App;
import './SignupPage.css'
import React, {useEffect, useState} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import homepic from '../../Pictures/homepic.jpg'
import Signup from './Signup';

function SignupPage() {
    
    return (
        <>
        <div className='notloggedsu'>
            <div className='nlinnersu1'>
            </div>
            <div className='nlinnersu2'>
                <div className='buffer'></div>
                <div className='suinin'>
                    <Signup/>
                </div>
            </div>
        </div>
        </>
    );
}
export default SignupPage;
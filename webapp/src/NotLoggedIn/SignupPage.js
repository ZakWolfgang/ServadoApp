import './SignupPage.css'
import React, {useEffect, useState} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import homepic from '../Pictures/homepic.jpg'
import Signup from './Signup';

function SignupPage() {
    
    return (
        <>
        <div className='notlogged'>
            <div className='nlinner'>
                <Signup/>
                <div className='sexophone'>
                    <div className='lucario'>
                        <h3 className='nltxt'>Discover</h3>
                        <h3 className='nltxt1'>New Food</h3>
                        <h3 className='nltxt1'>New Tastes</h3>
                        <h3 className='nltxt1'>New Kitchens</h3>
                    </div>
                </div>
            </div>
            <div className='nlinner'>
                <img className='nlpic'
                    src={homepic}
                />
            </div>
        </div>
        </>
    );
}
export default SignupPage;
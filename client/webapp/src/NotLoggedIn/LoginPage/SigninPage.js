import './SigninPage.css'
import React, {useEffect, useState} from "react";
import Login from "./Login";
import homepic from '../../Pictures/homepic.jpg'

function SigninPage() {
    
    return (
        <>
        <div className='notlogged'>
            <div className='nlinner'>
                <Login/>
                    <div className='lucario'>
                        <h3 className='nltxt'>Discover</h3>
                        <h3 className='nltxt1'>New Food</h3>
                        <h3 className='nltxt1'>New Tastes</h3>
                        <h3 className='nltxt1'>New Kitchens</h3>
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
export default SigninPage;
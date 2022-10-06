import React from 'react';
import './Landing.css'
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Landing() {
    return (
        <div className='landing'>
            <div className='inner'>
                <h3>Have an account?</h3>
                <Nav.Link><Link className='navlinks' to="/signin">Sign-In</Link></Nav.Link>
            </div>
            <div className='inner'>
                <h3>Need to create an account?</h3>
                <Nav.Link><Link className='navlinks' to="/signup">Signup</Link></Nav.Link>
            </div>
        </div>
    );
}

export default Landing;
import React from 'react';
import FoodCarousel from "../ComponentsZ/FoodCarousel";
import './Home.css'
import Logo2 from '../Pictures/Logo2.png'

function Home() {
    return (
        <div className='home'>
            <div className='car'>
                <img className='homelogo' src={Logo2}/>
            </div>
            <div className='txtbox'>
                <h2>Easy Customer Access</h2>
                <h2>from the Comfort of your Kitchen</h2>
                <div className='txt'>
                    <p>Change your menu, pricing, and aesthetic</p>
                    <p>of your online kitchen!</p>
                </div>
                <button className='hbutton'><a className='hbuttont' href="/menu">Get Started!</a></button>
            </div>
        </div>
    );
}

export default Home;
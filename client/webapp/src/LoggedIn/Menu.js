import React, {useEffect, useState} from 'react';
import './Menu.css'
import Grid from "@mui/material/Grid";
import CustomCard from "../ComponentsZ/CustomCard";
import ReviewCard from "../ComponentsZ/ReviewCard";

let currentPageNo = 0;

function Menu() {

    const txt = 'hey there'
    const icon = <i className="fa-solid fa-utensils fa-4x"></i>
    useEffect(() => {
    }, []);


return (
    <div className='menu'>
        <h1 className='header'>My Menu</h1>
        <div className='cusgrid'>
                <CustomCard txt={'Meals'} icon={<i className="fa-solid fa-utensils fa-4x"></i>}/>
                <CustomCard txt={'Appetizers'} icon={<i className="fa-solid fa-bowl-food fa-4x"></i>}/>
        </div>
        <div className='cusgrid'>
            <CustomCard txt={'Beverages'} icon={<i className="fa-solid fa-martini-glass fa-4x"></i>}/>
            <CustomCard txt={'Desserts'} icon={<i className="fa-solid fa-ice-cream fa-4x"></i>}/>
        </div>
        <h1 className='header'>Reviews</h1>
        <div className='cusgrid'>
            <ReviewCard txt={'Hot and fast!'} desc={'The food was great and the process was easy'}/>
            <ReviewCard txt={'Order completely wrong'} desc={'Gave me someone else\'s order'}/>
            <ReviewCard txt={'Pretty good'} desc={'Happy that I can order from my local restaurants online'}/>
        </div>
    </div>
);
}

export default Menu;

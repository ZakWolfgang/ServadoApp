import React, {useEffect, useState} from 'react';
import './Menu.css'
import Grid from "@mui/material/Grid";
import CustomCard from "../ComponentsZ/MyMenu/CustomCard";
import ReviewCard from "../ComponentsZ/MyMenu/ReviewCard";

let currentPageNo = 0;

function Menu() {

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
        <div className='cusgridrev'>
            <ReviewCard value={5} name={'Zachary S'} txt={'Fast and delicious!'} desc={'this shi bussin'}/>
            <ReviewCard value={1} name={'Alex S'} txt={'Wrong order'} desc={'i am not happy'}/>
            <ReviewCard value={3} name={'Clindell T'} txt={'Enjoyed my experience'} desc={'favorite restaurant, always has always will be'}/>
        </div>
    </div>
);
}

export default Menu;

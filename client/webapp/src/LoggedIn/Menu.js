import React, {useEffect, useState} from 'react';
import './Menu.css'
import Grid from "@mui/material/Grid";
import CustomCard from "../ComponentsZ/MyMenu/CustomCard";
import ReviewCard from "../ComponentsZ/MyMenu/ReviewCard";
import TempDrawer from '../ComponentsZ/TempDrawer'

let currentPageNo = 0;

function Menu() {

    const [opener, setOpener] = useState(false)
    const [label, setLabel] = useState('')

    const openDrawer = (labeler)=> {
        setLabel(labeler)
        setOpener(true)
    }

    useEffect(() => {
    }, []);


return (
    <div className='menu'>
        <h1 className='header'>My Menu</h1>
        <div className='cusgrid'>
            <a className='ugh' onClick={()=>openDrawer('Meals')}>
                <CustomCard txt={'Meals'} icon={<i className="fa-solid fa-utensils fa-4x"></i>}/>
            </a>
            <a className='ugh' onClick={()=>openDrawer('Appetizers')}>
                <CustomCard txt={'Appetizers'} icon={<i className="fa-solid fa-bowl-food fa-4x"></i>}/>
            </a>
        </div>
        <div className='cusgrid'>
            <a className='ugh' onClick={()=>openDrawer('Beverages')}>
                <CustomCard txt={'Beverages'} icon={<i className="fa-solid fa-martini-glass fa-4x"></i>}/>
            </a>
            <a className='ugh' onClick={()=>openDrawer('Desserts')}>
                <CustomCard txt={'Desserts'} icon={<i className="fa-solid fa-ice-cream fa-4x"></i>}/>
            </a>
        </div>
        <h1 className='header'>Reviews</h1>
        <div className='cusgridrev'>
            <ReviewCard value={5} name={'Zachary S'} txt={'Fast and delicious!'} desc={'this shi bussin'}/>
            <ReviewCard value={1} name={'Alex S'} txt={'Wrong order'} desc={'i am not happy'}/>
            <ReviewCard value={3} name={'Clindell T'} txt={'Enjoyed my experience'} desc={'favorite restaurant, always has always will be'}/>
        </div>
        <button onClick={()=>setOpener(true)}>open drawer</button>
        <TempDrawer label={label} opener={opener} setOpener={setOpener}/>
    </div>
);
}

export default Menu;

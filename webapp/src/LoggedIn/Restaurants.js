import React, {useEffect, useState} from 'react';
import RItem from './RItem'
import './Menu.css'
import Grid from "@mui/material/Grid";
import MenuItemList from "../components/MenuItemList";
import RItem2 from './RItem2'
import RItem4 from './RItem4'
import RItem5 from './RItem5'
import RItem3 from './RItem3'
import {useMenu} from "../hooks";

let currentPageNo = 0;

function Restaurants() {

    return (
        <div className='menu'>
            <Grid container spacing={2}>
                <Grid item xs ={4}><RItem/></Grid>
                <Grid item xs ={4}><RItem2/></Grid>
                <Grid item xs ={4}><RItem3/></Grid>
                <Grid item xs ={4}><RItem4/></Grid>
                <Grid item xs ={4}><RItem5/></Grid>
            </Grid>
        </div>
    );
}

export default Restaurants;
import React, {useEffect, useState} from 'react';
import MenuItem from './MenuItem'
import './Menu.css'
import Grid from "@mui/material/Grid";
import MenuItem2 from './MenuItem2'
import MenuItem4 from './MenuItem4'
import MenuItem5 from './MenuItem5'
import MenuItem3 from './MenuItem3'


function Menu() {


    return (
        <div className='menu'>
            <Grid container spacing={2}>
                <Grid item xs ={4}><MenuItem/></Grid>
                <Grid item xs ={4}><MenuItem2/></Grid>
                <Grid item xs ={4}><MenuItem3/></Grid>
                <Grid item xs ={4}><MenuItem4/></Grid>
                <Grid item xs ={4}><MenuItem5/></Grid>
            </Grid>
        </div>
    );
}

export default Menu;
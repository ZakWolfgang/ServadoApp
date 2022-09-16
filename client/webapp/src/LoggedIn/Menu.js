import React from 'react';
import MenuItem from '../Components/MenuItem'
import './Menu.css'
import Grid from "@mui/material/Grid";

function Menu() {
    return (
        <div className='menu'>
            <Grid container spacing={2}>
                <Grid item xs={4}><MenuItem/></Grid>
                <Grid item xs={4}><MenuItem/></Grid>
                <Grid item xs={4}><MenuItem/></Grid>
                <Grid item xs={4}><MenuItem/></Grid>
                <Grid item xs={4}><MenuItem/></Grid>
                <Grid item xs={4}><MenuItem/></Grid>
                <Grid item xs={4}><MenuItem/></Grid>
                <Grid item xs={4}><MenuItem/></Grid>
                <Grid item xs={4}><MenuItem/></Grid>
            </Grid>
        </div>
    );
}

export default Menu;
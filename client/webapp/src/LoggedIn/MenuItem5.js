import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import burgernfries from '../Pictures/burgernfries.jpeg'

export default function MediaCard() {



    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="200"
                src={burgernfries}
                alt="burger"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Cheese Burger with Fries
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Classic American meal with you're Favorite Side!
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
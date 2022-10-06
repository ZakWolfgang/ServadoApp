import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import brisket from '../Pictures/brisket.jpeg'

export default function MediaCard() {



    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="200"
                src={brisket}
                alt="brisket"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Brisket Plate with sides
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Doesn't get much more southern than this
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
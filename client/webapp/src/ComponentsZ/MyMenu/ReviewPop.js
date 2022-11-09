import React from 'react';
import './ReviewPop.css'
import Button from "@mui/material/Button";
import {Rating} from "@mui/material";
import MiniCard from "./MiniCard";

function ReviewPop(props) {
    return (props.pop) ? (
        <div className='pop'>
            <div className='pop-inner'>
                <h3>{props.name}</h3>
                <Rating name="read-only" value={props.value} readOnly />
                <p>{props.desc}</p>
                <p>User's Order: </p>
                <div className='revorder'>
                    {/*map out users order*/}
                    <div className='orderitem'>
                        <MiniCard
                            item={'BBQ Chicken'}
                            price={12.95}
                        />
                    </div>
                    <div className='orderitem'>
                        <MiniCard
                            item={'Sprite (L)'}
                            price={3}
                        />
                    </div>
                    <div className='orderitem'>
                        <MiniCard
                            item={'Fries (L)'}
                            price={4.50}
                        />
                    </div>
                    <div className='orderitem'>
                        <MiniCard
                            item={'Hot Fudge Sundae'}
                            price={4}
                        />
                    </div>
                </div>
                <Button>close</Button>
            </div>
        </div>
    ):"";
}

export default ReviewPop;
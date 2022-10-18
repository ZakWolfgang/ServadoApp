import React from 'react';
import './CustomCard.css'

function CustomCard(props) {

    return (
        <div className='cuscard'>
            <div className='cus-inner'>
                <i>{props.icon}</i>
            </div>
            <div className='cus-inner'>
                <h3 className='text'>{props.txt}</h3>
            </div>
        </div>
    );
}

export default CustomCard;
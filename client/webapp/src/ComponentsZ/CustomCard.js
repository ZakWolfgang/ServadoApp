import React from 'react';
import './CustomCard.css'

function CustomCard(props) {

    return (
        <div className='card'>
            <div>
                <i>{props.icon}</i>
            </div>
            <div>
                <h3 className='text'>{props.txt}</h3>
            </div>
        </div>
    );
}

export default CustomCard;
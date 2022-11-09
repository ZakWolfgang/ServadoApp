import React from 'react';
import './MiniCard.css'

function MiniCard(props) {
    return (
        <div className='minicard'>
            <p>{props.item}</p>
            <p>${props.price}</p>
        </div>
    );
}

export default MiniCard;
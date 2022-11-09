import React from 'react';
import './OrderCard.css'

function OrderCard(props) {

    const customize = ['Hold special sauce', 'Add tomatoes', 'Hold pickles']

    const listcustomize = customize.map((cust) =>
    <div>
        <li>{cust}</li>
    </div>
    )

    return (
        <div className='ocoutter'>
            <div className='ocinner'>
                <p className='ocname'>Zachary Schultz</p>
                <p className='ocitem'>Chicken Marsala</p>
                <div className='occustomize'>
                    {/*map out customizations*/}
                    <div className='ocbullet'></div>
                    <ul>{listcustomize}</ul>
                </div>
            </div>
        </div>
    );
}

export default OrderCard;
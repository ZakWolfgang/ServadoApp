import React from 'react';
import'./Orders.css'
import OrderCard from '../ComponentsZ/MyOrders/OrderCard'

function Orders(props) {
    return (
        <div>
            <h1>Orders</h1>
            <div className='oroutter'>
                <div>
                    <h2>Order In</h2>
                    <OrderCard/>
                </div>
                <div>
                    <h2>Order Out</h2>
                </div>
            </div>
        </div>
    );
}

export default Orders;
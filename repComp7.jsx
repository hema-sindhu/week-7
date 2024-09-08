// src/repComp7.jsx
import React from 'react';

// Define the Order component
const Order = ({ order }) => (
    <div>
        <h3>{order.productName}</h3>
        <p>Quantity: {order.quantity}</p>
    </div>
);

// Define the OrderList component
export const OrderList = ({ orders }) => (
    <div>
        {orders.map(order => (
            <Order key={order.id} order={order} />
        ))}
    </div>
);

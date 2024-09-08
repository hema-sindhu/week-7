// src/repComp10.jsx
import React from 'react';

// Define the Notification component to display individual notification details
const Notification = ({ message }) => {
    return (
        <div className="notification">
            <p>{message}</p>
        </div>
    );
};

// Define the NotificationList component to display a list of notifications
export const NotificationList = ({ notifications }) => {
    return (
        <div className="notification-list">
            {notifications.map(notification => (
                <Notification key={notification.id} message={notification.message} />
            ))}
        </div>
    );
};

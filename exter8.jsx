// exter8.jsx
import React from 'react';
import './exter8.css'; // Import the CSS file for styling

const Notification = ({ type, message }) => {
  let notificationClass = 'notification';

  switch (type) {
    case 'success':
      notificationClass += ' success';
      break;
    case 'error':
      notificationClass += ' error';
      break;
    case 'warning':
      notificationClass += ' warning';
      break;
    default:
      break;
  }

  return (
    <div className={notificationClass}>
      {message}
    </div>
  );
};

export default Notification;

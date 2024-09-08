// exter9.jsx
import React from 'react';
import './exter9.css'; // Import the CSS file for styling

const NavigationPanel = () => {
  return (
    <div className="navigation-panel">
      <ul className="navigation-menu">
        <li className="menu-item"><a href="#home">Home</a></li>
        <li className="menu-item"><a href="#about">About</a></li>
        <li className="menu-item"><a href="#services">Services</a></li>
        <li className="menu-item"><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default NavigationPanel;

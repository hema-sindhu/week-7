// exter3.jsx
import React from 'react';
import './exter3.css'; // Import the CSS file for styling

const NavigationMenu = () => {
  return (
    <nav className="nav-menu">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;

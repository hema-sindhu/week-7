// exter2.jsx
import React from 'react';
import './exter2.css'; // Import the CSS file for styling

const SiteFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Connect with us:</p>
        <ul className="footer-links">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
        <p className="footer-note">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SiteFooter;

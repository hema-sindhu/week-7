// exter10.jsx
import React from 'react';
import './exter10.css'; // Import the CSS file for styling

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

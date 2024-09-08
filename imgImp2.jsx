import React, { useState } from 'react';
import './imgImp2.css'; // Optional: For slider styling

// Importing images from assets folder
import img1 from './assets/image1.jpg';
import img2 from './assets/image2.jpg';
import img3 from './assets/image3.jpg';

const ImgImp2 = () => {
    // Array of images to display
    const images = [img1, img2, img3];

    // State to track the current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle the "Next" button
    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to handle the "Previous" button
    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="image-slider">
            {/* Display the current image */}
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />

            {/* Previous and Next buttons */}
            <div className="slider-buttons">
                <button onClick={prevImage} className="prev-button">Previous</button>
                <button onClick={nextImage} className="next-button">Next</button>
            </div>
        </div>
    );
};

export default ImgImp2;

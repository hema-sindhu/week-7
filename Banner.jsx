import React, { useState, useEffect } from 'react';
import './Banner.css'; // Import CSS for styling

// Import images
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';

const images = [image1, image2, image3];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="banner">
      <img src={images[currentImage]} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;

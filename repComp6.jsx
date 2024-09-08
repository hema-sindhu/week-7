// src/repComp6.jsx
import React from 'react';

// Photo component to display individual photos
const Photo = ({ url, description }) => {
    return (
        <div>
            <img src={url} alt={description} style={{ width: '300px', height: '200px' }} />
            <p>{description}</p>
        </div>
    );
};

// PhotoGallery component that renders a list of Photo components
const PhotoGallery = ({ photos }) => {
    return (
        <div>
            {photos.map(photo => (
                <Photo key={photo.id} url={photo.url} description={photo.description} />
            ))}
        </div>
    );
};

export { PhotoGallery }; // Export the PhotoGallery component

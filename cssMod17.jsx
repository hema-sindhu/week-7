import React, { useState, useEffect } from 'react';

const ProgressBar = ({ progress }) => {
    const containerStyle = {
        width: '100%',
        height: '20px',
        backgroundColor: '#e0e0de',
        borderRadius: '5px',
        overflow: 'hidden',
    };

    const fillerStyle = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: '#76c7c0',
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 0.5s ease-in-out',
    };

    const labelStyle = {
        padding: '0 5px',
        color: 'white',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            <div style={fillerStyle}>
                <span style={labelStyle}>{`${progress}%`}</span>
            </div>
        </div>
    );
};

const ProgressBarDemo = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 100 : prevProgress + 10
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Progress Bar Example</h2>
            <ProgressBar progress={progress} />
        </div>
    );
};

export default ProgressBarDemo;

import React, { useState, useEffect } from 'react';
import './Bulb.css';
import bulb_img from './Assets/bulb_image.jpg';

const Bulb = () => {
    const [isOn, setIsOn] = useState(false);
    const [isFlickering, setIsFlickering] = useState(false);

    useEffect(() => {
        let flickerInterval;
        if (isFlickering) {
            flickerInterval = setInterval(() => {
                setIsOn(prevState => !prevState);
            }, 200);
        } else {
            clearInterval(flickerInterval);
        }
        return () => clearInterval(flickerInterval);
    }, [isFlickering]);

    const handleOnClick = () => {
        setIsOn(true);
        setIsFlickering(false);
    };

    const handleOffClick = () => {
        setIsOn(false);
        setIsFlickering(false);
    };

    const handleFlickerClick = () => {
        setIsFlickering(true);
    };

    return (
            <div className="bulb-container">
                <div className='bulb-wrapper'>
                <div className={`bulb ${isOn ? 'on' : ''}`}></div>
                <img src={bulb_img} alt="photo of the bulb"/>
                </div>
            <div className="controls">
                <button onClick={handleOnClick}>On</button>
                <button onClick={handleOffClick}>Off</button>
                <button onClick={handleFlickerClick}>Flicker</button>
            </div>
            </div>
    );
};

export default Bulb;

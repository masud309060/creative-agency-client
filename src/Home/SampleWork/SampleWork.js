import React from 'react';
import SlickCarousel from './SlickCarousel';
import './SampleWork.css'

const SampleWork = () => {
    return (
        <div className="slide-container">
            <h3 className="text-white text-center mb-5">Here are some of our <span style={{color:"#7AB259"}}>our works</span></h3>
                <SlickCarousel></SlickCarousel>
        </div>
    );
};

export default SampleWork;
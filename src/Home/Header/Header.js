import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'
import frame from '../../creative-agency-main/images/logos/Frame.png'

const Header = () => {
    return (
        <div>
            <div className="header-main">
                <Navbar></Navbar>
                <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <h1 className="brand-heading">Let's Grow Your <br/>Brand To The <br/>Next Level</h1>
                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo molestiae tempora ad aperiam nihil possimus ipsa sunt obcaecati repellat, Dolore assumenda ex non dolorum quasi tempora.</p>
                        <button className="btn-brand">Hire Us</button>
                    </div>
                    <div className="col-md-6">
                        <div className="header-img">
                            <img src={frame} alt=""/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
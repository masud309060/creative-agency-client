import React from 'react';
import './Navbar.css'
import logo from '../../creative-agency-main/images/logos/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container pt-3">
            <nav className="navbar navbar-expand-sm navbar-light">
                <img src={logo} alt="" height="50"/>
                <div className="ml-auto font-weight-bold">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link mr-3" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3" href="#">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3" href="#">Contact Us</a>
                    </li>
                        <Link to="/login" style={{textDecoration:"inherit", color:"inherit"}}>
                            <button className="btn-brand">Login</button>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
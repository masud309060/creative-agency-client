import React from 'react';
import './OrderNav.css'
import logo from '../../creative-agency-main/images/logos/logo.png'
import { useContext } from 'react';
import { userContext } from '../../App';
import { Link } from 'react-router-dom';


const OrderNav = ({page}) => {
    const {user} = useContext(userContext)
    const [userLogin] = user
    return (
        <div className="d-flex flex-row justify-aligns-center container-fluid">
            <div className="py-2 pl-5">
                <Link to='/'>
                <img src={logo} alt="" height="60"/>
                </Link>
            </div>
            <div className="py-3 pl-3 ml-5">
                <h4 className="text-capitalize">{page}</h4>
            </div>
            <div className="ml-auto p-3 mt-1">
                <h5>{userLogin.name}</h5>    
            </div>
        </div>
    );
};

export default OrderNav;
import React from 'react';
import { useContext } from 'react';
import { userContext } from '../../App';
import logo from '../../creative-agency-main/images/logos/logo.png'
import './OrderNav.css'


const OrderNav = ({page}) => {
    const {user} = useContext(userContext)
    const [userLogin] = user
    return (
        <div className="d-flex flex-row justify-aligns-center container-fluid">
            <div className="py-2 pl-5"><img src={logo} alt="" height="60"/></div>
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
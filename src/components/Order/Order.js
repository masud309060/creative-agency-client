import React, { useEffect } from 'react';
import { useState } from 'react';
import './Order.css';
import Sidebar from '../Sidebar/Sidebar';
import OrderNav from '../OrderNav/OrderNav';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { useContext } from 'react';
import OrderForm from '../OrderForm/OrderForm';
import { userContext } from '../../App';

const Order = () => {
    const {user} = useContext(userContext)
    const [userLogin] = user;
    const [page, setPage] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(()=> {
        fetch('https://evening-stream-29230.herokuapp.com/isAdmin',{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: userLogin.email})
    })
    .then(res => res.json())
    .then(data => setIsAdmin(data))
    },[userLogin.email])

    return (
        <div>
            <OrderNav page={page}></OrderNav>
            <div className="order-area">
                <div className="order-area-left">
                    <Sidebar page={page} setPage={setPage} isAdmin={isAdmin}></Sidebar>
                </div>
                <div className="order-area-right">
                    {
                        (page==="order" && !isAdmin)?
                        <OrderForm></OrderForm>: 
                        (page==="review") ?
                        <Review></Review> :
                        (page==="add service") ?
                        <AddService></AddService> :
                        (page==="make admin") ?
                        <MakeAdmin></MakeAdmin> :
                        (page==="service list" ) ?
                        <ServiceList isAdmin={isAdmin}></ServiceList>:
                        <ServiceList isAdmin={isAdmin}></ServiceList>

                    }
                </div>
            </div>
        </div>
    );
};

export default Order;
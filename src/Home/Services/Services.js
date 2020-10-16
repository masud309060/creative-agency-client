import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Services.css'

const Services = () => {
    const servicesData = [
        {
            name: "Web & Mobile design",
            description: "We craft stunnig and amazing web UI, using a well drafted UX to fit your product.",
            img: "https://i.ibb.co/NFvDjnM/service1.png"
        },
        {
            name: "Graphic design ",
            description: "We craft stunnig and amazing web UI, using a well drafted UX to fit your product.",
            img: "https://i.ibb.co/z8zMxmr/service3.png"
        },
        {
            name: "Web development",
            description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
            img: "https://i.ibb.co/z4w9HZT/service2.png"
        }
    ]
    const {service} = useContext(userContext)
    const [selectedService, setSelectedService] = service;
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("https://evening-stream-29230.herokuapp.com/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[services.length])
 
    const handleOrderService = (id) => {
        fetch(`https://evening-stream-29230.herokuapp.com/getService/`+id)
        .then(res => res.json())
        .then(data => setSelectedService(data))
    }

    return (
        <div>
            <div className="container">
                <h3 className="services-heading">Provide awesome <span>Services</span></h3>
                <div className="d-flex flex-wrap justify-content-around">
                {
                    services.map(data=>
                        <Link to='/order' onClick={()=>handleOrderService(`${data._id}`)}  key={data._id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <div className="card mb-5 text-center" style={{width: "20rem", border:"none"}}>
                            <div className="card-body">
                                {
                                    data.image? <img className="img-effect" src={`data:image/png;base64,${data.image.img}`} height="74"/> :
                                    <img className="img-effect" src={data.img} alt="" height="74"/>
                                }
                                <h5 className="card-title my-3">{data.name}</h5>
                                <p className="card-text">{data.description}</p>
                            </div>
                        </div>
                        </Link>
                    )
                }
                </div>
            </div>
        </div>
    );
};

export default Services;
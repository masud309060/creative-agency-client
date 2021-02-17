import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Services.css'

const Services = () => {

    const {service} = useContext(userContext)
    const [selectedService, setSelectedService] = service;
    const [services, setServices] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://evening-stream-29230.herokuapp.com/services");
            const data = await res.json();
            setServices(data)
        }
        fetchData();
    },[services])
 
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
                    (services.length > 0) ? <>{
                        services.map(data => 
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
                        } </> : <img src="https://i.stack.imgur.com/hzk6C.gif" alt="loading"/>
                }
                </div>
            </div>
        </div>
    );
};

export default Services;
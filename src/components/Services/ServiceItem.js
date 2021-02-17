import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const ServiceItem = ({services, handleOrderService}) => {
  return (
    <>
        {services?.map(data => 
          <Link to='/order' onClick={()=>handleOrderService(`${data._id}`)}  key={data._id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <div className="card mb-5 text-center" style={{width: "20rem", border:"none"}}>
              <div className="card-body">
                  {
                      data.image? <img className="img-effect" 
                      src={`data:image/png;base64,${data.image.img}`} alt="serviceBinaryImg" height="74"/> :
                      <img className="img-effect" src={data.img} alt="serviceImg" height="74"/>
                  }
                  <h5 className="card-title my-3">{data.name}</h5>
                  <p className="card-text">{data.description}</p>
              </div>
          </div>
          </Link>
        )}
    </>
  );
};

export default ServiceItem;
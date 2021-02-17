import React, { useEffect } from 'react';
import { useState } from 'react';

const ClientsFeedback = () => {
   
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('https://evening-stream-29230.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[reviews.length])
    
    return (
        <div  className="container my-5">
            <h3 className="text-center" style={{color:"#171B4E"}}>Clients 
            <span style={{color:"#7AB259"}}> Feedback</span></h3>
            <div className="d-flex flex-wrap justify-content-around my-5">
                {
                    reviews.map((data, index) =>
                        <div className="card mb-5" key={index} style={{width: "18rem"}}>
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <img src={data.img} alt="" style={{borderRadius:"50%"}} height="50"/>
                                    <div className="ml-3" >
                                        <h5 className="card-title mt-2" style={{lineHeight:"50%"}}>{data.name}</h5>
                                        <h6>{data.title}</h6>
                                    </div>
                                </div>
                                <p className="card-text mt-3">{data.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ClientsFeedback;
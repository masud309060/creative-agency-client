import userEvent from '@testing-library/user-event';
import React, { useEffect } from 'react';
import { useState } from 'react';

const ClientsFeedback = () => {
    const clientsData = [
        {
            name: "Nash Patrik",
            title: "CEO Manpol",
            description: "Thrive's website design team far exceeded my expectations on every front, and I have very high expectations. The end product is a beautiful website that embodies who we are as company. Every person I worked with at Thrive was knowledgeable, creative, prompt, and personable.",
            img: "https://i.ibb.co/vYsB1tc/customer-2.png"
           
            
        },
        {
            name: "Miriam Barron",
            title: "Associate Director Meals Wheels",
            description: "My new site created by Thrive just launched. They've done a great job of creating exactly what I wanted. Easy to work with and very responsive. They met all of my expectations and had a lot of insight regarding marketing tools I didn't know existed.",
            img: "https://i.ibb.co/qrY6B3K/customer-3.png"
        },
        {
            name: "Bria Malone",
            title: "D.M.D. Dentist",
            description: "We at Kee Service were very impressed with the all aspects of our new website. We would highly reccomend Thrive to anyone looking to build a new website.",
            img: "https://i.ibb.co/X25jtnZ/customer-1.png"
        }
    ]
   
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
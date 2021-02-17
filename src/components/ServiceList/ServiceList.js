import React, { useEffect } from 'react';
import './ServiceList.css'
import { useContext } from 'react';
import { useState } from 'react';
import { userContext } from '../../App';

const ServiceList = (props) => {
    const {user} = useContext(userContext)
    const [userLogin] = user;
    const [serviceList, setServiceList] = useState([])
    let isAdmin = props.isAdmin;
    

    useEffect(()=>{
        fetch(`https://evening-stream-29230.herokuapp.com/serviceList/`+userLogin.email)
        .then(res => res.json())
        .then(data => {
            setServiceList(data)
        })
    },[userLogin.email])
    
    return (
        <div>

            { // only Admin access this side 
            isAdmin ? 
            <div style={{backgroundColor:"white", borderRadius:"20px",padding:"20px"}}>
                <table className="table" style={{border:"none"}}>
                <thead style={{backgroundColor:"#F5F6FA"}}>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Service</th>
                    <th scope="col">Project Details</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                
                {
                serviceList.map(data => 
                    <tr key={data._id}>
                        <td style={{width:"15%"}}>{data.name}</td>
                        <td style={{width:"20%"}}>{data.email}</td>
                        <td style={{width:"20%"}}>{data.serviceName}</td>
                        <td style={{width:"20%"}}>{data.message}</td>
                        <td>
                        <select className="select-menu">
                            <option style={{color:"#FF4545"}} value="pending">Pending</option>
                            <option style={{color:"#FFBD3E"}} value="">Done</option>
                            <option style={{color:"#009444"}} value="ongoing">On going</option>
                        </select>
                        </td>
                    </tr>
                    )
                }
                </tbody>
            </table>
            </div> :

      //### User Access this page ### 
      <div className="d-flex flex-wrap justify-content-start">
      {
        serviceList.map(data => 
            <div className="card mb-5 mr-5 service-list-card" key={data._id} style={{width: "415px", borderRadius:"20px"}}>
              <div className="card-body m-3">
                <div className="d-flex justify-content-between align-items-center">
                <img src={`data:image/png;base64,${data.serviceImg}`} height="74"/>
                    <button className="status-bar">{data.status}</button>
                </div>
                <h5 className="card-title my-3">{data.serviceName}</h5>
                <p className="card-text">{data.serviceDescripton}</p>
              </div>
            </div>)
      }
     </div>
            }
            
        </div>
    );
};

export default ServiceList;
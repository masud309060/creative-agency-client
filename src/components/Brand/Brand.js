import React from 'react';
import stack from '../../creative-agency-main/images/logos/slack.png'
import google from '../../creative-agency-main/images/logos/google.png'
import uber from '../../creative-agency-main/images/logos/uber.png'
import netflix from '../../creative-agency-main/images/logos/netflix.png'
import airBnv from '../../creative-agency-main/images/logos/airbnb.png'

const Brand = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-between" style={{margin:"50px 0"}}>
                <div className="col-md-2 my-5 px-3 text-center">
                    <img src={stack} alt="" height="36" width="140"/>
                </div>
                <div className="col-md-2 my-5 px-3 text-center">
                    <img src={google} alt="" height="44" width="129"/>
                </div>
                <div className="col-md-2 my-5 px-3 text-center">
                    <img src={uber} alt="" height="56" width="99"/>
                </div>
                <div className="col-md-2 my-5 px-3 text-center">
                    <img src={netflix} alt="" height="67" width="120"/>
                </div>
                <div className="col-md-2 my-5 px-3 text-center">
                    <img src={airBnv} alt="" height="51" width="161"/>
                </div>
                
            </div>
        </div>
    );
};

export default Brand;
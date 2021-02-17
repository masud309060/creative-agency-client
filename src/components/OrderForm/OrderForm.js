import React from 'react';
import { useContext } from 'react';
import './OrderForm.css';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const OrderForm = () => {
    const { register, handleSubmit } = useForm();
    const {service, user} = useContext(userContext)
    const [selectedService] = service;
    const [userLogin] = user;
    const [file, setFile] = useState(null)
    console.log("selectedService",selectedService)


    const onSubmit = data => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('message', data.message)

        formData.append('serviceName', selectedService.name)
        formData.append('serviceDescription', selectedService.description)
        formData.append('serviceImg', selectedService.image.img)
        formData.append('serviceId', selectedService._id)

        fetch('https://evening-stream-29230.herokuapp.com/addOrder', {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(info => {
            if(info){
                alert("Your Order Placed Successfully")
            }
        })
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }


    return (
        <div>
            <div className="order-form-area">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" type="text" className="form-control mb-3 w-50" required placeholder=" Your name/ company's name" ref={register}/>
                    <input name="email" type="email" className="form-control mb-3 w-50" defaultValue={userLogin.email} required placeholder="Your email address" ref={register}/>
                    <input name="serviceName" type="text" className="form-control mb-3 w-50" defaultValue={selectedService.name} required placeholder="Your serviece name" ref={register}/>
                    <textarea name="message" className="form-control mb-3 w-50" cols="30" rows="4" placeholder="Your message" ref={register}></textarea>
                    <div className="d-flex">
                      <input name="price" type="text" className="form-control mb-3 w-25" required placeholder="Price" ref={register}/>
                        <label className="file-upload">
                            <input onChange={handleFileChange} type="file"/>
                            <FontAwesomeIcon icon={faCloudUploadAlt}></FontAwesomeIcon> Upload Project File
                        </label>
                    </div>
                    <button type="submit" className="btn-brand" style={{height:"60px"}}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import './AddService.css'

const AddService = () => {
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState({})

    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }
    const handleBlur = (e) => {
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
    const handleAddService = (e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('description', info.description)

        fetch('https://evening-stream-29230.herokuapp.com/addService', {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data){
                alert("Service Added Successfully")
            }
        })

    e.preventDefault()
    }

    return (
        <div >
            <form onSubmit={handleAddService}>
                <div className="add-service-area">
                <div className="form-group d-flex flex-wrap">
                    <div className="w-50">
                        <label className="font-weight-bold">Service Title</label>
                        <input name="name" onBlur={handleBlur} type="text" className="form-control" placeholder="Enter title"/>
                    </div>
                    <div className="w-25">
                        <label><span className="ml-4 font-weight-bold">Icon</span> <br/>
                            <div className="icon-upload">
                                <input onChange={handleFileChange} type="file"/>
                                <FontAwesomeIcon icon={faCloudUploadAlt}></FontAwesomeIcon> Upload Project File
                            </div>
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Description</label>
                    <textarea name="description" onBlur={handleBlur} type="text" className="form-control w-50" cols="30" rows="6" placeholder="Enter Description"></textarea>
                </div>
                </div>
                <button type="submit" className="btn btn-success d-block mt-3 px-3 ml-auto">Submit</button>
            </form>
        </div>
    );
};

export default AddService;
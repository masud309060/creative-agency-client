import React from 'react';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('https://evening-stream-29230.herokuapp.com/addAdmin', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(info => {
            if(info){
                alert("New Admin Added Successfully")
            }
        })
    }

    return (
        <div style={{backgroundColor:"white", height:"300px", borderRadius:"10px", padding:"50px"}}>
            <form onSubmit={handleSubmit(onSubmit)} className="form-inline">
                <input className="form-control mr-sm-2 w-50" style={{height:"45px"}}
                name='email' type="email" placeholder="jon@gmail.com" ref={register}/>
                <button className="btn btn-success my-2 my-sm-0 px-5 py-2" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default MakeAdmin;
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../App';

const Review = () => {
    const {user} = useContext(userContext)
    const [userLogin] = user;

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const reviewData = { img: userLogin.photo, ...data }
        fetch('https://evening-stream-29230.herokuapp.com/addReview', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(info => {
            if(info){
                alert("Thank you for your kind review")
            }
        })
    };

    return (
        <div>
            <div className="review-area">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" type="text" className="form-control mb-3 w-50" defaultValue={userLogin.name} required placeholder=" Your name" ref={register}/>
                    <input name="title"type="text" className="form-control mb-3 w-50" required placeholder="Company’s name, Designation" ref={register}/>
                    <textarea name="description" type="text" className="form-control mb-3 w-50" cols="30" rows="4" placeholder="Your message . . ." ref={register}></textarea>
                    <button type="submit" className="btn-brand" style={{width:"170px"}}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Review;
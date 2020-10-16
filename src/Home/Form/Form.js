import React from 'react';
import './Form.css'

const Form = () => {
    return (
        <div className='form-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <h2 className="text-dark">Let us handle your <br/>project, professionally.</h2>
                        <br/>
                        <small className="text-dark">With well Written codes, we build amazing apps for <br/> all platforms, mobile and web apps in general.</small>
                    </div>

                    <div className="col-md-6">
                        <form >
                            <input type="text" className="form-control mb-3" placeholder="Your email address"/>
                            <input type="text" className="form-control mb-3" placeholder=" Your name/ company's name"/>
                            <textarea name="message" className="form-control mb-3" cols="30" rows="10" placeholder="Your message"></textarea>
                            <button type="submit" className="btn-brand">Send</button>
                        </form>
                    </div>
                </div> 
                    <p className="text-center mt-5">copyright Orange labs {(new Date()).getFullYear("yyyy")}</p>
            </div>
        </div>
    );
};

export default Form;
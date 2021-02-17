import React from 'react';
import Header from '../Header/Header'
import Brand from '../Brand/Brand';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Form from '../Form/Form';
import SampleWork from '../SampleWork/SampleWork';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header /> 
            <Brand /> 
            <Services /> 
            <SampleWork /> 
            <ClientsFeedback /> 
            <Form /> 
        </div>
    );
};

export default Home;
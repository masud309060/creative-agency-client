import React from 'react';
import Brand from '../Brand/Brand';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Form from '../Form/Form';
import Header from '../Header/Header';
import SampleWork from '../SampleWork/SampleWork';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Brand></Brand>
            <Services></Services>
            <SampleWork></SampleWork>
            <ClientsFeedback></ClientsFeedback>
            <Form></Form>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Service from '../services/Service';
import Other from '../Other/Other';
import Teemm from '../Teemm/Teemm';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Other></Other>
            <Teemm></Teemm>
        </div>
    );
};

export default Home;
import React from 'react';
import Footer from '../../Shered/Footer/Footer';
import Banner from '../Banner/Banner';
import Info from '../Info/Info/Info';
import MakeAppointment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services/Services';
import Testimonials from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='px-10'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;
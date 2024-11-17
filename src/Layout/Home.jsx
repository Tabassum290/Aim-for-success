import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <section className='h-[600px] w-11/12 mx-auto'> <Banner/></section>
            <Footer/>
        </div>
    );
};

export default Home;
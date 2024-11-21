import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Services from '../Components/Services';
import FreeResource from '../Components/FreeResource';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <section className='w-11/12 mx-auto'>
             <Banner/>
             <Services/>
             <FreeResource/>
             </section>
            <Footer/>
        </div>
    );
};

export default Home;
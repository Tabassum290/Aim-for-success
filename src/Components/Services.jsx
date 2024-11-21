import React, { useEffect, useState } from 'react';
import Service from './Service';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=> {
        fetch("/career.json")
        .then(res=> res.json())
        .then(data=> setServices(data))
        AOS.init({
            duration: 1600,
            once: true,  
          });
    },[])
    return (
        <div>
            <h1 className='text-4xl text-center font-bold'  data-aos="fade-left">Our Services</h1>
          <div data-aos="fade-down" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
          {
                services.map(service=> <Service key={service.id} service={service}></Service>)
            }
          </div>
        </div>
    );
};

export default Services;
import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

const Service = ({service}) => {
    const {image,service_name,category,pricing,counselor,id} = service;
    
    return (
        <SwiperSlide>
          <div>
            <div className="card bg-base-100 w-96 shadow-xl my-8">
  <figure>
    <img className='h-[300px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {service_name}
      <div className="badge badge-success text-white">{category}</div>
    </h2>
    <p ><span className='font-bold text-lg'>Counsilor: </span> {counselor} </p>
    <div className="card-actions justify-between items-center">
      <div className="badge badge-outline text-center p-4 font-semibold text-green-800">{pricing}</div>
      < Link to={`/service/${id}`}className=" text-green-600 font-bold text-lg">Learn More...</Link>
    </div>
  </div>
</div>
        </div>
        </SwiperSlide>
        
    );
};

export default Service;
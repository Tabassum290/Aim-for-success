import React from 'react';

const Banner = () => {
    return (
        <div className='lg:flex justify-between items-center '>
            <div>
                <h1 className='text-4xl font-bold'>Welcome to <br/> <span className=' text-green-600'>AIM FOR SUCCESS</span></h1>
            </div>
            <div className="carousel w-full lg:w-3/4 my-8 rounded-lg h-[400px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/w49bysq/banner1.jpg"
      className="w-full p-4" />
    <div className="absolute left-5 right-5 top-1/2 flex transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/vJ8kQ5X/banner-1.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/9V1ZRJ0/banner-2.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
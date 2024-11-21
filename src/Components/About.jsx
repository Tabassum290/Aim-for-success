import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
    return (
        <div className='bg-blue-950'>
            <Navbar/>
            <main className='w-11/12 mx-auto bg-blue-950 text-white'>
             <div className='mb-6 w-3/4 flex flex-col items-center justify-center lg:mx-28 mx-12'>
                <h1 className='text-4xl font-bold text-white text-center mt-6'>Introduction</h1>
             <p className='font-semibold text-center my-4 text-gray-200'>"We are dedicated to guiding students and professionals toward fulfilling careers by providing personalized advice, tools, and resources. Our mission is to empower you with the clarity and confidence to pursue your dream path."</p>
             </div>
             <div className='mb-6 rounded-lg w-3/4 flex flex-col items-center justify-center lg:mx-28 mx-12'>
                <h1 className='text-4xl font-bold text-white text-center'>Team Overview</h1>
             <p className='font-semibold text-center my-4 text-gray-200'>"Our team of certified career counselors, industry experts, and coaches bring decades of experience in diverse fields, ensuring you receive tailored and actionable guidance."</p>
             </div>
             <div className=' mb-6 rounded-lg w-3/4 lg:mx-28 mx-12 flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-bold text-white text-center lg:text-left'> Services Provided</h1>
             <p className='text-gray-200 font-bold text-xl my-2 text-left'>"We specialize in : </p>
                <ul className='text-gray-200'>
                    <li>1.Career assessments to identify your strengths and passions.</li>
                    <li>2.Resume writing to highlight your achievements.</li>
                    <li>3.Coaching to ace interviews and make the best impression</li>
                </ul>
  
             </div>
             <div className='w-3/4 flex flex-col items-center justify-center lg:mx-28 mx-12'>
                <h1 className='text-4xl font-bold text-white text-center my-6'>Contact Information</h1>
             <p className='text-gray-200'>Ready to take the next step in your career? Schedule a Free Consultation or Explore Our Resources</p>
             <p className='mb-6 text-gray-200'>Have questions? Reach out to us at info@careercounsel.com or call (123) 456-7890.</p>
             </div>
              </main>
            <Footer/>
        </div>
    );
};

export default About;
import Navbar from './Navbar';
import Footer from './Footer';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Consultant = () => {
  const { data } = useLoaderData(); 
  const [bookedServices, setBookedServices] = useState(new Set()); 
  const handleBook = (serviceId) => {
    setBookedServices((prev) => new Set(prev).add(serviceId));
    toast.success('Your Required Service Booked Successfully', { autoClose: 2000 });
  };
  useEffect(() => {
  
    AOS.init({
      duration: 1600, 
      once: true,  
    });
  }, []);

  return (
    <div>
      <Navbar />
      <main className="w-11/12 mx-auto" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-center my-8" data-aos="fade-left">
          Book Your Required Service
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((service, index) => (
            <div key={index} className="card bg-base-100 w-96 my-8 border-2 border-green-700">
              <figure>
                <img
                  className="h-[300px]"
                  src={service.image || 'https://via.placeholder.com/300'}
                  alt={service.service_name || 'Service'}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {service.service_name || 'Service Name'}
                  <div className="badge badge-success text-white">
                    {service.category || 'Category'}
                  </div>
                </h2>
                <p>
                  <span className="font-bold text-lg">Counselor: </span>
                  {service.counselor || 'Not Available'}
                </p>
                <p className='font-bold'>Duration :<span className='font-semibold'>{service.duration || 'N/A'}</span></p>
                <div className="card-actions justify-between items-center">
                  <div className="badge badge-outline text-center p-4 font-semibold text-green-800">
                    {service.pricing || 'N/A'}
                  </div>
                  <div className="badge badge-outline text-center p-4 font-semibold text-green-800">
                  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  </div>
                    {service.rating || 'N/A'}
                  </div>
                
                  <button
                    onClick={() => handleBook(service.id)}
                    className={`btn btn-primary font-bold text-lg text-white ${
                      bookedServices.has(service.id) ? 'btn-disabled' : ''
                    }`}
                    disabled={bookedServices.has(service.id)}
                  >
                    {bookedServices.has(service.id) ? 'Booked' : 'Book Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Consultant;

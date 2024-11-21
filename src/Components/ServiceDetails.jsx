import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLoaderData} from 'react-router-dom';

const ServiceDetails = () => {
  const {image,service_name,category,brief_description,pricing,duration,counselor,rating} = useLoaderData();

  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleInputChange = (e) => setComment(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') return;
    setCommentsList([...commentsList, comment]);
    setComment('');
  };

  return (
    <div>
      <Navbar />
      <section className="grid grid-cols-1 lg:grid-cols-4 mx-auto w-11/12">
        <div className="col-span-3 lg:ml-40">
          <h2 className='font-bold text-4xl text-green-900 my-6'>{service_name} Details</h2>
        <div className="card bg-base-100 my-8 border-2 border-green-800 p-4">
  <figure>
    <img className='h-[300px] w-3/4 rounded-lg'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {service_name}
      <div className="badge badge-success text-white">{category}</div>
    </h2>
    <p className='font-semibold'>Description: {brief_description}</p>
    <p className='text-green-700 font-bold text-xl'>Counsilor: <span className='font-semibold text-md'>{counselor} </span></p>
    
    <p className='font-bold'>Duration :<span className='font-semibold'>{duration}</span></p>
    <p className='font-bold'>Rating :<span className='font-semibold'>{rating}
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  </div>
      </span></p>
    <div className="card-actions justify-between items-center">
      <div className="badge badge-outline text-center p-4 font-semibold text-green-800">{pricing}</div>
    </div>
  </div>
</div>
        </div>

        <div className="col-span-1 border-2 my-6 p-6 rounded-lg border-green-800 mt-28 ">
        
        <h2 className="text-2xl font-semibold mb-4">Give A Feedback</h2>
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={handleInputChange}
            placeholder="Write your comment here..."
            className="input input-bordered w-full p-2 mb-4"
            rows="5"
            required
          />
          <button type="submit" className="btn bg-green-900 text-white w-full">
            Submit Feedback
          </button>
          
        </form>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Submitted Comments:</h3>
          <ul className="mt-4">
            {commentsList.length === 0 ? (
              <p>No feedback submitted yet.</p>
            ) : (
              commentsList.map((comment, index) => (
                <li key={index} className="p-2 border border-gray-300 rounded mt-2">
                  {comment}
                </li>
              ))
            )}
          </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetails;

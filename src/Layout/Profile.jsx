import React, { useContext, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const [showName, setShowName,createNewUser] = useState(false);
const handleUpdateProfile= (e) => {
e.preventDefault();
const name = e.target.name.value;
const photo = e.target.photo.value;
createNewUser()
.then(result => {
  console.log(result.user);
})
.catch(error => {
  console.log(error.code);
})

}
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col justify-center items-center my-6 border-2 border-green-700 p-8 rounded-lg lg:w-1/2 mx-auto">
  <div>
  {user && user?.email ? (
        <div className="relative flex flex-col items-center">
          <img
            className="w-12 rounded-full"
            src={user?.photoURL}
            alt="User Profile"
          />
       <p className="text-2xl font-semibold">Name:{user.displayName}</p>
       <p className="text-xl font-semibold ">Email:{user.email}</p>
    </div>
      ) : (
        <div className="flex flex-col items-center">
          <img
            className="w-8 rounded-3xl"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Default Avatar"
          />
          <p className="mt-2 text-sm font-semibold">Guest</p>
        </div>
      )}
  </div>
  </div>
  <form onSubmit={handleUpdateProfile} className='mb-6'>
<div className='lg:w-1/2 flex flex-col justify-center mx-auto gap-6 border-2 p-12 mb-6 border-green-700'>
<h1 className='text-3xl font-bold text-center'>Update Profile</h1>
<label className="input input-bordered flex items-center gap-2 mb-4">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" name="name" placeholder="Username" />
</label>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" name="photo" placeholder="PhotoURL" />
</label>
<button className='btn btn-brimary'>Update</button>
</div>
</form>

<Footer/>
        </div>
    );
};

export default Profile;
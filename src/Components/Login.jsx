import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {setUser,userLogIn}= useContext(AuthContext);
    const handleLoginSubmit=(e)=> {
       e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email,password);

       userLogIn(email,password)
       .then(result => {
        const user = result.user;
        setUser(user);
       })
       .catch(error => {
        console.log(error.message,error.code);
       })
    }
    return (
        <div>
           <div className="bg-base-200 p-12">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-md p-8">
      <form  onSubmit={handleLoginSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name ="email"required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Don't Have Any Account?<span className='text-green-600 font-bold underline'><Link to="/auth/register">Register</Link></span></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
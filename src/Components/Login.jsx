import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
const Login = () => {
    const { userLogIn,setUser }= useContext(AuthContext);
    const emailRef = useRef();
    const [error,setError] = useState({});
    const [showPass,setShowPass]=useState(false);
    const location = useLocation();
    const navigate = useNavigate();
console.log(location);
    const handleLoginSubmit=(e)=> {
       e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email,password);

       userLogIn(email,password)
       .then(result => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        toast.success("Login Successful.Welcome to Aim");
      })
       .catch(err => {
        setError({...error,login:err.code});
        console.log(err.message,err.code);
        toast.error(`Login failed: ${error.message}`);
       })
    }
const handleForgotPassword =() => {
  console.log("sent me email",emailRef.current.value);
  const email = emailRef.current.value;
  if(!email){
    toast("Please Provide a valid Email Adress");
  }else{
    sendPasswordResetEmail(auth,email)
    .then(() => {
      toast("Password Reset email sent, Please Check Your email")
    })
  }

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
          <input type="email" placeholder="email" className="input input-bordered" ref={emailRef} name ="email"required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPass ?"text": "password"} placeholder="password" name="password" className="input input-bordered " required />
          <button onClick={()=> setShowPass(!showPass)} className='btn btn-ghost absolute right-4 top-[34px]'>{
            showPass ? <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
            }
          </button>
         {
          error.login && (
            <label className="label text-red-600 font-semibold">
            {error.login}
          </label>
          )
         }
          <label onClick={handleForgotPassword} className="label">
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
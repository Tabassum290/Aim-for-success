import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa';

const Register = () => {
    const [error, setError] = useState('');
    const [showPass,setShowPass] = useState(false);
    const { createNewUser, setUser, updateProfileData } = useContext(AuthContext);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const validatePassword = (password) => {
        const isLengthValid = password.length >= 6;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);

        if (!isLengthValid) {
            return "Password must be at least 6 characters.";
        }
        if (!hasUppercase) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!hasLowercase) {
            return "Password must contain at least one lowercase letter.";
        }
        return null;
    };

    const handleGoogleLogin = () => {
        console.log("Google login button clicked");
        console.log(auth,provider)
        signInWithPopup(auth,provider)
            .then(result => {
                console.log("Google login successful:", result.user);
                toast.success("Google Login successful!");
                navigate("/"); // Navigate after successful login
            })
            .catch(error => {
                console.error("Google login error:", error);
                toast.error("Google Login failed!");
            });
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const passwordError = validatePassword(password);
        if (passwordError) {
            setError(passwordError);
        } else {
            setError('');
            createNewUser(email, password)
                .then(result => {
                    console.log(result.user);
                    setUser(result.user);
                    updateProfileData({ displayName: name, photoURL: photo })
                        .then(() => {
                            toast.success("Registration Successful. Welcome to Aim");
                            navigate("/"); // Navigate after successful registration
                        });
                })
                .catch(error => {
                    console.error("Error", error.message, error.code);
                    toast.error("Registration Failed");
                });
        }
    };

    return (
        <div>
            <div className="bg-base-200 p-12">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register Form</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-md p-8">
                        <form onSubmit={handleRegisterSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Photo URL"
                                    name="photo"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    name="email"
                                    required
                                />
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
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>
                                Already Have an Account?{' '}
                                <span className="text-green-600 font-bold underline">
                                    <Link to="/auth/login">Login</Link>
                                </span>
                            </p>
                        </form>
                        <div className="flex justify-center mb-4">
                            <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
                                <span className="text-2xl">
                                    <AiFillGoogleCircle />
                                </span>
                                Login With Google
                            </button>
                        </div>
                        <div className="flex justify-center mb-4">
                            <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
                                <span className="text-2xl">
                                    <FaFacebook/>
                                </span>
                                Login With Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

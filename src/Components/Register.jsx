import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const {createNewUser,setUser} = useContext(AuthContext);
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

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

     createNewUser(email,password)
     .then(result=> {
        console.log(result.user);
        setUser(result.user);
     })   
     .catch(error => {
        console.log("Error",error.message,error.code);
     })
        const passwordError = validatePassword(password);

        if (passwordError) {
            setError(passwordError);
        } else {
            setError(''); 
            console.log(email, password, name, photo);
           
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>

                            {/* Display error if validation fails */}
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

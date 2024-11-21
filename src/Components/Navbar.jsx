import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showName, setShowName] = useState(false);

  const handleMouseEnter = () => {
    setShowName(true);
  };

  const handleMouseLeave = () => {
    setShowName(false);
  };

  const links = (
    <>
      <NavLink to="/" className="mx-6" activeClassName="text-yellow-500 font-bold">
        Home
      </NavLink>
      <NavLink to="/consultant" activeClassName="text-yellow-500 font-bold">
        Book Service
      </NavLink>
      <NavLink to="/profile" className="mx-6" activeClassName="text-yellow-500 font-bold">
        My Profile
      </NavLink>
      <NavLink to="/about" activeClassName="text-yellow-500 font-bold">
        About Us
      </NavLink>
    </>
  );

  return (
    <div className='sticky top-0 z-10'>
      <div className="navbar bg-green-600 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow-md gap-4 flex mx-6 text-black items-center justify-center"
            >
              {links}
            </ul>
          </div>
          <a className="lg:text-4xl md:text-4xl text-3xl font-bold italic mr-4">Aim</a>
        </div>
        <div className="navbar-center hidden lg:flex gap-6">
          <ul className="menu menu-horizontal px-8 font-semibold text-lg">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
          <div className="avatar">
            <div className="w-8">
              {user && user?.email ? (
                <div className="relative flex flex-col items-center">
                  <img
                    className="w-8 rounded-full"
                    src={user?.photoURL}
                    alt="User Profile"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                  {showName && (
                    <p className="absolute top-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold">{user.displayName}</p>
                  )}
                </div>
              ) : (
                <div className="relative flex flex-col items-center">
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
          {user && user?.email ? (
            <button onClick={logOut} className="btn btn-outline text-white">
              LogOut
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

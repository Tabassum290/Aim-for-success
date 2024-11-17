import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
    <NavLink to="/" className={"mx-6"}>Home</NavLink>
    <NavLink to="/profile">My Profile</NavLink>
    </>
    return (
        <div>
          <div className="navbar bg-green-600 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-6 flex mx-6 text-black">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-4xl font-bold italic">Aim</a>
  </div>
  <div className="navbar-center hidden lg:flex gap-6">
    <ul className="menu menu-horizontal px-8 font-semibold text-lg">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="avatar">
  <div className="w-14 mx-4 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
  </div>
    <a className="btn btn-primary">Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;
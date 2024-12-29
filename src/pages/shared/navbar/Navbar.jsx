import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-black text-white px-10 h-20">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a className='uppercase'>Home</a></li>
                        <li><a className='uppercase'>Contact us</a></li>
                        <li><a className='uppercase'>Dashboard</a></li>
                        <li><a className='uppercase'>Our Menu</a></li>
                        <li><a className='uppercase'>Our Shop</a></li>
                    </ul>
                </div>
                <Link to={'/'} className='text-center'>
                    <h2 className='uppercase font-medium text-xl'>bistro boss</h2>
                    <h3 className='uppercase font-light text-lg tracking-widest'>Restaurant</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='uppercase'>Home</a></li>
                    <li><a className='uppercase'>Contact us</a></li>
                    <li><a className='uppercase'>Dashboard</a></li>
                    <li><a className='uppercase'>Our Menu</a></li>
                    <li><a className='uppercase'>Our Shop</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
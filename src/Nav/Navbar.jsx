import React, { useContext, useState } from 'react';
import logo from "../assets/logo.png"
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { Authcontext } from '../components/provider/Authprovider';
import "./Nav.css"

const Navbar = () => {
    const navigate = useNavigate();
    const { loggeduser, logout, name, userprofile } = useContext(Authcontext);
    const handlgelogout = () => {
        logout();
    }

    return (
        <div>
            <article className='bg-gray-900 text-white flex-col lg:flex-row lg:flex justify-around p-5 gap-5 items-center'>
                <div className='flex-col flex items-center'>
                    <h1 className='font-bold text-3xl italic'>Chef Paradise</h1>
                </div>
                <div className='flex flex-col items-center lg:flex lg:flex-row'>
                    <NavLink to={"/"} className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Home</NavLink>
                    <NavLink to={"/blogs"} className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Blogs</NavLink>
                    <div className='p-2 rounded-xl'>
                        {
                            (loggeduser && userprofile) ? <div class="tooltip"><img src={userprofile} className={`w-20 rounded-xl mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`} />
                                <span className="tooltiptext">{name}</span>
                            </div> : (loggeduser && name) ? <p className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>{name}</p> : (loggeduser  && name == null || userprofile == null ) ? <p className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>User</p> : <NavLink to={"/login"} className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Login</NavLink>
                        }
                    </div>
                    <NavLink className={`py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${loggeduser ? 'visible' : 'invisible'}`} onClick={handlgelogout} to={"/login"} >Logout</NavLink>
                </div>

            </article>
        </div>
    );
};

export default Navbar;
import React, { useContext, useState } from 'react';
import logo from "../assets/logo.png"
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { Authcontext } from '../components/provider/Authprovider';

const Navbar = () => {
    const navigate = useNavigate();
    const { loggeduser, logout, email, name } = useContext(Authcontext);
    const handlgelogout = () => {
        logout()
    }
    return (
        <div>
            <article className='bg-yellow-800 text-white flex-col lg:flex-row lg:flex justify-between gap-5 items-center'>
                <div>
                    <img className='w-40 color-white' src={logo} alt="" />
                </div>
                <h1 className='font-bold text-3xl italic'>Chef Paradise</h1>
                <NavLink to={"/"} className='p-2 rounded-xl  hover:bg-yellow-400'>Home</NavLink>
                <NavLink to={"/blogs"} className='p-2 rounded-xl hover:bg-yellow-400'>Blogs</NavLink>
                <div className='p-2 rounded-xl hover:bg-yellow-400'>
                    {
                        loggeduser ? <p>{name}</p> : <NavLink to={"/login"}>Login</NavLink>
                    }
                </div>
                <NavLink className='p-2 rounded-xl hover:bg-yellow-400' onClick={handlgelogout} to={"/login"}>Logout</NavLink>
            </article>
        </div>
    );
};

export default Navbar;
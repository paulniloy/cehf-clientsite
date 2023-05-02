import React, { useContext, useState } from 'react';
import logo from "../assets/logo.png"
import { Link, Navigate, useNavigate } from 'react-router-dom';
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
                <Link to={"/"} className='p-2 rounded-xl  hover:bg-yellow-400'>Home</Link>
                <Link to={"/blogs"} className='p-2 rounded-xl hover:bg-yellow-400'>Blogs</Link>
                <div className='p-2 rounded-xl hover:bg-yellow-400'>
                    {
                        loggeduser ? <p>{name}</p> : <Link to={"/login"}>Login</Link>
                    }
                </div>
                <Link className='p-2 rounded-xl hover:bg-yellow-400' onClick={handlgelogout} to={"/login"}>Logout</Link>
            </article>
        </div>
    );
};

export default Navbar;
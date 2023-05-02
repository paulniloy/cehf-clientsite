import React, { useContext, useState } from 'react';
import logo from "../assets/logo.png"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Authcontext } from '../components/provider/Authprovider';

const Navbar = () => {
    const navigate = useNavigate();
    const {loggeduser, logout} = useContext(Authcontext);
    const handlgelogout=() =>{
        logout()
    }
    return (
        <div>
            <article className='bg-yellow-800 text-white flex justify-around items-center'>
                <div>
                    <img className='w-40 color-white' src={logo} alt="" />
                </div>
                <Link to={"/"} className='p-2 rounded-xl hover:scale-110 hover:bg-purple-400'>Home</Link>
                <Link to={"/blogs"} className='p-2 rounded-xl hover:scale-110 hover:bg-purple-400'>Blogs</Link>
                <div className='p-2 rounded-xl hover:scale-110 hover:bg-purple-400'>
                    {
                        loggeduser ? <Link onClick={handlgelogout}>Logout</Link> : <Link to={"/login"}>Login</Link>
                    }
                </div>
            </article>
        </div>
    );
};

export default Navbar;
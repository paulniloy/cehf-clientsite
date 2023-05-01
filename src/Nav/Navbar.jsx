import React, { useState } from 'react';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [user,seruser] = useState(false)
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
                        user ? <p>user</p> : <p>hello</p>
                    }
                </div>
            </article>
        </div>
    );
};

export default Navbar;
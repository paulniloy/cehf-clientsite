import React, { useState } from 'react';
import logo from "../assets/logo.png"

const Navbar = () => {
    const [user,seruser] = useState(false)
    return (
        <div>
            <article className='bg-yellow-800 text-white flex justify-around items-center'>
                <div>
                    <img className='w-40 color-white' src={logo} alt="" />
                </div>
                <div className='p-2 rounded-xl hover:scale-110 hover:bg-purple-400'>Home</div>
                <div className='p-2 rounded-xl hover:scale-110 hover:bg-purple-400'>Blogs</div>
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
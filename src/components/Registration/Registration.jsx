import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider';

const Registration = () => {

    const { createmailandpass, profile, setname, setuserprofile } = useContext(Authcontext);
    const [error, seterror] = useState('')
    const navigate = useNavigate()

    const handleregistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const namevalue = form.name.value;
        const url = form.photo.value;
        console.log(email, password, url, namevalue);
        if (!email) {
            return seterror('error : email section can not be empty')
        }
        if (!password) {
            return seterror('error : password section can not be empty')
        }

        createmailandpass(email, password)
            .then(result => {
                const loggeduser = result.user;
                console.log(result.user);
                profile(namevalue, url)
                setuserprofile(url) 
                setname(namevalue)
                navigate('/login')

            })
            .catch(error => {
                seterror(error.message)
            })

    }
    return (
        <div>
            <form onSubmit={handleregistration} className='flex flex-col justify-center items-center p-10 m-10 w-3/4 mx-auto border'>
                <div className='text-3xl mb-10'>Registration Page</div>
                <div>
                    <div>
                        <p>Email</p>
                        <input className='focus:bg-white focus:text-black  h-10 w-60 bg-gray-800 border-2 p-5 rounded-xl mt-2'  type="email" name="email" id="e" require placeholder='email' />
                    </div>
                    <div>
                        <p>Password</p>
                        <input className='focus:bg-white focus:text-black  h-10 w-60 bg-gray-800 border-2 p-5 rounded-xl mt-2'  type="password" name="password" id="p" require placeholder='password' />
                    </div>
                    <div>
                        <p>Name</p>
                        <input className='focus:bg-white focus:text-black  h-10 w-60 bg-gray-800 border-2 p-5 rounded-xl mt-2'  type="text" name="name" id="t" require placeholder='name' />
                    </div>
                    <div>
                        <p>Photo Url</p>
                        <input className='focus:bg-white focus:text-black  h-10 w-60 bg-gray-800 border-2 p-5 rounded-xl mt-2'  type="url" name="photo" id="u" require placeholder='url' />
                    </div>
                </div>
                <button type='submit' className='border mt-4 px-5 py-2 rounded-xl hover:bg-green-600 hover:text-white shadow-lg'>Sign up</button>
                <p className='mt-5'>Do you have existing account? <NavLink to={"/login"} className='underline text-blue-400 hover:text-green-600'>Login</NavLink></p>
                <div className='text-red-600'>
                    {error}
                </div>
            </form>
            
        </div>
    );
};

export default Registration;
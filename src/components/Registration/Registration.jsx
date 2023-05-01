import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    const handleregistration = (event) =>{
        console.log('hello world');
    }
    return (
        <div>
            <form onSubmit={handleregistration} className='flex flex-col justify-center items-center p-10 m-10 w-3/4 mx-auto border'>
                <div className='text-3xl mb-10'>Registration Page</div>
                <div>
                    <div>
                        <p>Email</p>
                        <input className='rounded-xl mt-2 h-10 w-60  p-5 bg-white border-2' type="email" name="email" id="" placeholder='email' required />
                    </div>
                    <div>
                        <p>Password</p>
                        <input className='h-10 w-60 bg-white border-2 p-5 rounded-xl mt-2' type="password" name="password" required id="" placeholder='password' />
                    </div>
                    <div>
                        <p>Name</p>
                        <input className='h-10 w-60 bg-white border-2 p-5 rounded-xl mt-2' type="text" name="text" required id="" placeholder='name' />
                    </div>
                    <div>
                        <p>Photo Url</p>
                        <input className='h-10 w-60 bg-white border-2 p-5 rounded-xl mt-2' type="text" name="photo" required id="" placeholder='url' />
                    </div>
                </div>
                <button type='submit' className='mt-4 px-5 py-2 rounded-xl hover:bg-yellow-600 border-2'>Sign up</button>
            <p className='mt-5'>Do you have existing account? <Link to={"/login"} className='underline text-blue-400'>Login</Link></p>
            </form>
        </div>
    );
};

export default Registration;
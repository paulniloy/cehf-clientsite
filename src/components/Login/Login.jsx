import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider';
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io5";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [error, seterror] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const [success, setsuccess] = useState('Successfully logged in')
    console.log(location);
    const from = location?.state?.from?.pathname;

    const { loggeduser, google, github, signin, setloader } = useContext(Authcontext);
    // console.log(loggeduser);

    const handlegoogle = () => {
        console.log('handlge loging click');
        google()
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                navigate(from || "/")
            })
    }
    const handlelogin = (event) => {
        const form = event.target;
        event.preventDefault()
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signin(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                form.reset()
                navigate(from || "/")
            })
            .catch(error => {
                seterror(error.message)
            })
    }
    const handlegit = () => {
        github()
            .then((result) => {
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                navigate(from || "/")
            })
    }
    return (
        <div  className='flex flex-col justify-center items-center p-10 m-10 w-3/4 mx-auto border'>
            <form onSubmit={handlelogin}>
                <div className='text-3xl mb-10 text-center'>Login Page</div>
                <div>
                    <div>
                        <p>Email</p>
                        <input className='focus:bg-white focus:text-black  h-10 w-60 bg-gray-800 border-2 p-5 rounded-xl mt-2'  type="email" name="email" id="email" placeholder='email' required />
                    </div>
                    <div>
                        <p>Password</p>
                        <input className='focus:bg-white focus:text-black  h-10 w-60 bg-gray-800 border-2 p-5 rounded-xl mt-2' type="password" name="password" required id="password" placeholder='password' />
                    </div>
                </div>
                <button type='submit' className='border mt-4 px-5 py-2 rounded-xl hover:bg-green-600 hover:text-white shadow-lg'>Sign in</button>
                <p className='mt-5'>Don't you have account? <Link to={"/registration"} className='underline text-blue-400 hover:text-green-600'>Register</Link></p>
                <div className='flex justify-center gap-10 mt-5'>
                </div>
                {
                    loggeduser ? <p className='text-green-400'>{success}</p> : error
                }
            </form>
            <div className='flex justify-center gap-20 w-1/2 mx-auto'>
                <div>
                    <button className='shadow-lg rounded-full p-2 hover:bg-gray-900' onClick={handlegoogle}><IoLogoGoogle className='h-10 w-10' /></button>
                </div>
                <div>
                    <button className='rounded-full p-2 hover:bg-gray-900' onClick={handlegit}><IoLogoGithub className='h-10 w-10' /></button>
                </div>
            </div>
        </div>
    );
};

export default Login;
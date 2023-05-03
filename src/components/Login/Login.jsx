import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider';
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io5";

const Login = () => {
    const [error, seterror] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const [success, setsuccess] = useState('Successfully logged in')
    console.log(location);
    const from = location.state?.from?.pathname
    
    const {loggeduser, google, github, signin, setloader} = useContext(Authcontext);

    const handlelogin = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signin(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            form.reset()
            setloader(true)
            navigate(from || "/")
          })
        .catch(error=>{
            seterror(error.message)
        })
    }
    const handlegoogle = () =>{
        google()
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setloader(true)
        })
        navigate(from || "/")
    }
    const handlegit = ()=>{
        github()
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            navigate(from || "/")

          })
    }
    return (
        <div>
            <form onSubmit={handlelogin} className='flex flex-col justify-center items-center p-10 m-10 w-3/4 mx-auto border'>
                <div className='text-3xl mb-10'>Login Page</div>
                <div>
                    <div>
                        <p>Email</p>
                        <input className='rounded-xl mt-2 h-10 w-60  p-5 bg-white border-2' type="email" name="email" id="email" placeholder='email' required />
                    </div>
                    <div>
                        <p>Password</p>
                        <input className='h-10 w-60 bg-white border-2 p-5 rounded-xl mt-2' type="password" name="password" required id="password" placeholder='password' />
                    </div>
                </div>
                <button type='submit' className='mt-4 px-5 py-2 rounded-xl hover:bg-yellow-600 border-2'>Sign in</button>
            <p className='mt-5'>Don't you have account? <Link to={"/registration"} className='underline text-blue-400'>Register</Link></p>
            <div className='flex justify-center gap-10 mt-5'>
                <button onClick={handlegoogle}><IoLogoGoogle className='h-10 w-10'/></button>
                <button onClick={handlegit}><IoLogoGithub className='h-10 w-10'/></button>
            </div>
                {
                    loggeduser ? <p className='text-green-400'>{success}</p> : error
                }
            </form>
        </div>
    );
};

export default Login;
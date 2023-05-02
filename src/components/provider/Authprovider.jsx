import React, { createContext, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GithubAuthProvider , GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase.config';

export const Authcontext = createContext(null);
const auth = getAuth(app);


const Authprovider = ({children}) => {
    
    const [loggeduser, setloggeduser] = useState(null)
    const [email, setemail] = useState(null)
    const [loader, setloader] = useState(true)
    const createmailandpass = (email,password)=>{
        setloader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signin = (email, password) =>{
        setloader(true);
       return signInWithEmailAndPassword(auth, email, password)
    }


    const google = () =>{
        setloader(true)
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }
    const github = () =>{
        setloader(true)
        const provider = new GithubAuthProvider();
        signInWithPopup(auth,provider)
    }
    const logout = () =>{
        signOut(auth)
        .then()
        .catch()
    }

    const authinfo = {
        google,createmailandpass, github, signin, loggeduser, logout, loader, email
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user =>{
            setloggeduser(user);
            setloader(false)
            console.log(user);
            setemail(user.email)
        })
        return ()=>{
            return unsubscribe()
        }
    })

    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;
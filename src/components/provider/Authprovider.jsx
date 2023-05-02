import React, { createContext, useState } from 'react';
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GithubAuthProvider , GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase.config';

export const Authcontext = createContext(null);
const auth = getAuth(app);

const createmailandpass = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
}

const Authprovider = ({children}) => {
    const google = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }
    const github = () =>{
        const provider = new GithubAuthProvider();
        signInWithPopup(auth,provider)
    }
    // const facebook = ()=>{
    //     const provider = new FacebookAuthProvider();
    //     signInWithPopup(auth, provider)
    //     .then((result) => {
    //         const user = result.user;
    //         const credential = FacebookAuthProvider.credentialFromResult(result);
    //         const accessToken = credential.accessToken;
    //       })
    // }

    const authinfo = {
        google,createmailandpass, github

    }

    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;
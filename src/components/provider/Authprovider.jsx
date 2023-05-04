import React, { createContext, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GithubAuthProvider , GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase.config';

export const Authcontext = createContext(null);
const auth = getAuth(app);


const Authprovider = ({children}) => {
    const [name, setname] = useState('')
    const [loggeduser, setloggeduser] = useState(null)
    const [loader, setloader] = useState(true)
    const [userprofile, setuserprofile] = useState(null);
    const createmailandpass = (email,password)=>{
        setloader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signin = (email, password) =>{
        setloader(true);
       return signInWithEmailAndPassword(auth, email, password)
    }


    const google = () =>{
        setloader(true);
        const provider = new GoogleAuthProvider();
         return signInWithPopup(auth, provider);
    }
    const github = () =>{
        setloader(true)
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth,provider)
    }
    const logout = () =>{
        setloader(true)
        signOut(auth)
        .then()
        .catch(error=>{
            console.log(error.message)
        })
    }
    const profile = (name, url) =>{
        const user = auth.currentUser;
        if(user){
            setloader(true);
            return updateProfile(user, {
                displayName: `${name}`, photoURL: `${url}`
            }).then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
            });
        }
    }

    const authinfo = {
        google,createmailandpass, github, signin, loggeduser, logout, loader, profile, name, setname, userprofile, setloader
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user =>{
            setloggeduser(user);
            setloader(false)
            console.log(user);
            setname(user.displayName)
            setuserprofile(user.photoURL)
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
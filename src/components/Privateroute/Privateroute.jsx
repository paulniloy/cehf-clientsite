import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider';

const Privateroute = ({children}) => {

    const {loggeduser} = useContext(Authcontext)
    console.log(loggeduser);

    if(loggeduser){
        return children
    }
        return <Navigate to={"/login"} replace={true}></Navigate>
};

export default Privateroute;
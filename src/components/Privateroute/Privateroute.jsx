import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider';
import { Spinner } from 'react-bootstrap';

const Privateroute = ({children}) => {
    const location = useLocation();
    console.log(location);

    const {loggeduser, loader} = useContext(Authcontext)
    if(loader){
        return <Spinner animation="border" variant="primary" />
    }

    if(loggeduser){
        return children
    }
        return <Navigate to={"/login"} state={{from:location}} replace={true}></Navigate>
};

export default Privateroute;
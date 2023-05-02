import React, { createContext, useState } from 'react';

export const Authcontext = createContext(null)
const Authprovider = ({children}) => {
    const [user] = useState('hello')

    const authinfo = {
        user

    }

    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;
import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthComtext = createContext()

const AuthProvider = ({ children }) => {

    const allContext = useFirebase()
    return (
        <AuthComtext.Provider value={allContext}>
            {children}
        </AuthComtext.Provider>
    );
};

export default AuthProvider;
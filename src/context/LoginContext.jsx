import { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    const [ currentUser, setCurrentUser ] = useState({user: ''});


    return (
        <LoginContext.Provider value={[ currentUser, setCurrentUser ]}>
            { children } 
        </LoginContext.Provider>
    )

}
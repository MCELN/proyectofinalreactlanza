import { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    const [ currentUser, setCurrentUser ] = useState(JSON.parse(localStorage.getItem('User')) || JSON.parse(sessionStorage.getItem('User')) || {user: ''});

    console.log(currentUser);

    return (
        <LoginContext.Provider value={[ currentUser, setCurrentUser ]}>
            { children } 
        </LoginContext.Provider>
    )

}
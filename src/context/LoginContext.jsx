import { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    const [ currentUser, setCurrentUser ] = useState(JSON.parse(localStorage.getItem('User')) || JSON.parse(sessionStorage.getItem('User')) || {user: '', lvl: ''});
    const [ stock, setStock ] = useState(false);

    return (
        <LoginContext.Provider value={[ currentUser, setCurrentUser, stock, setStock ]}>
            { children } 
        </LoginContext.Provider>
    )

}
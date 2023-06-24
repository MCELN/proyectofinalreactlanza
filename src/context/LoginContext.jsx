import { useState, createContext } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    const [users, setUsers] = useState("");

    return (
        <LoginContext.Provider value={[ users, setUsers ]}>
            {children}
        </LoginContext.Provider>
    )
}
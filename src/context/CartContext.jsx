import React, { useState, createContext, useEffect, useContext } from 'react';
import { LoginContext } from './LoginContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [ currentUser ] = useContext(LoginContext);
    const [counter, setCounter] = useState(0);
    const [lS, setLS ] = useState(JSON.parse(localStorage.getItem(currentUser.user)) || []);

    useEffect(() => {
        if(lS.length > 0) {
            const cartQty = lS.reduce((a, b) => a + b.qty, 0);
            setCounter(cartQty);
        } else {
            setCounter(0);
        }
        localStorage.setItem(currentUser.user, JSON.stringify(lS));
    },[lS, currentUser.user]);

    return (
        <CartContext.Provider value={[ counter, lS, setLS ]}>
            {children}
        </CartContext.Provider>
    )
}

import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [counter, setCounter] = useState(0);
    const [lS, setLS ] = useState(JSON.parse(localStorage.getItem('Cart')) || []);

    useEffect(() => {
        if(lS.length > 0) {
            const cartQty = lS.reduce((a, b) => a + b.qty, 0);
            setCounter(cartQty);
        } else {
            setCounter(0);
        }
        localStorage.setItem('Cart', JSON.stringify(lS));
    },[lS]);

    return (
        <CartContext.Provider value={[ counter, lS, setLS ]}>
            {children}
        </CartContext.Provider>
    )
}

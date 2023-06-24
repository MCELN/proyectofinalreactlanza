import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [counter, setCounter] = useState(0);

    return (
        <CartContext.Provider value={[ counter, setCounter ]}>
            {children}
        </CartContext.Provider>
    )
}

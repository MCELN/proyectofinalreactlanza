import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import style from './cartWidget.module.css';

const CartWidget = () => {

    const [ counter ] = useContext(CartContext);

    return (
        <div className={style.cartCount}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{counter}</span>
        </div>
    )
}

export default CartWidget

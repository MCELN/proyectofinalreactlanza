import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import style from './cartWidget.module.css';

const CartWidget = () => {

    const [ counter ] = useContext(CartContext);

    return (
        <div className={style.cartCount}>
            <Link to='/cartShop' className={style.link}>
                <FontAwesomeIcon icon={faCartShopping} />
                <span>{counter}</span>
            </Link>
        </div>
    )
}

export default CartWidget

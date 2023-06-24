import React, { useContext, useState } from 'react';
import style from './cartButtons.module.css';
import { CartContext } from '../../context/CartContext';



const CartButtons = () => {

    const [counter, setCounter] = useContext(CartContext);
    const [unit, setUnit] = useState(0);

    const handleAddClick = () => {
        setCounter(counter + 1);
        setUnit(unit + 1);
    }

    const handleRemoveClick = () => {
        counter > 0 && unit > 0 && setCounter(counter - 1);
        unit > 0 && setUnit(unit - 1);
    }

    return (
        <div className={style.menuAdd}>
            <div className={style.count}>
                <button onClick={handleRemoveClick}>-</button>
                <input type="text" value={unit} id='valueInput' />
                <button onClick={handleAddClick}>+</button>
            </div>
            <button className={style.addCart}>Agregar al Carrito</button>
        </div>
    )
}

export default CartButtons

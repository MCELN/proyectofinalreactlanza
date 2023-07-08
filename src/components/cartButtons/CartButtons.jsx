import React, { useContext, useState, useEffect } from 'react';
import style from './cartButtons.module.css';
import { CartContext } from '../../context/CartContext';
import { ProductsContext } from '../../context/ProductsContext';
import Swal from 'sweetalert2';


const CartButtons = ({ id }) => {

    const [productsData] = useContext(ProductsContext);
    const [, lS, setLS ] = useContext(CartContext);
    const [unit, setUnit] = useState(0);
    const [prevUnit, setPrevUnit] = useState(0);//En caso que supere el stock, el número de productos vuelve al ya cargado.

    useEffect(() => {//Carga la cantidad de productos ya agregados al carrito.
        const exists = lS.find(l => l.id === id);
        if(exists) {
            setUnit(exists.qty);
            setPrevUnit(exists.qty);
        }
    },[id, lS]);

    const handleAddClick = () => {
        setUnit(unit + 1);
    }

    const handleRemoveClick = () => {
        unit > 0 && setUnit(unit - 1);
    }

    const handleAddCart = () => {
        handleStock();
    }

    const handleStock = () => {
        const exists = lS.find(e => e.id === id);
        const tmpProduct = productsData.find(p => p.id === id);
        if(tmpProduct.stock < unit) {
            Swal.fire({
                icon: 'error',
                title: 'No disponemos de ese Stock',
                text: `${tmpProduct.stock === 0 ? 'Lo sentimos. Este producto está sin stock' : `Sólo tenemos ${tmpProduct.stock} de este producto`}`,
            })
            setUnit(prevUnit);

        } else if(!exists && unit > 0) {
            setLS([...lS, { ...tmpProduct, qty: unit} ]);
            setPrevUnit(unit);
        } else if(unit > 0) {
            const index = lS.findIndex(e => e.id === id);
            lS[index].qty = (unit - lS[index].qty) + lS[index].qty;
            if(lS[index].qty === 0) {
                lS.splice(index, 1);
            }
            const newArray = lS.slice();
            setLS(newArray);
            setPrevUnit(unit);
            }
        }

    return (
        <div className={style.menuAdd}>
            <div className={style.count}>
                <button onClick={handleRemoveClick}>-</button>
                <input type="text" value={unit} id='valueInput' readOnly />
                <button onClick={handleAddClick}>+</button>
            </div>
            <button className={style.addCart} onClick={handleAddCart}>Agregar al Carrito</button>
        </div>
    )
}

export default CartButtons

import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import style from './cartShop.module.css';
import CartButtons from '../components/cartButtons/CartButtons';

const CartShop = () => {

    const [ , lS, setLS ] = useContext(CartContext);
    const [ total, setTotal ] = useState(0);
    const [ cartLS, setCartLS ] = useState([]);

    useEffect(() => {
        const tmpTotal = lS.reduce((a, b) => a + (b.price * b.qty), 0);
        setTotal(tmpTotal);
        setCartLS(lS);
    }, [lS]);

    function handleRemove(id) {
        const index = lS.findIndex(e => e.id === id);
        lS.splice(index, 1);
        const newArray = lS.slice();
        setLS(newArray);
    }

    return (

        <div>
            <div>
            <h2>Detalle de la compra:</h2>
                <div className={style.titleBar}>
                    <p>Marca</p>
                    <p>Imagen</p>
                    <p>Producto</p>
                    <p>Precio por Unidad</p>
                    <p>Cantidad</p>
                    <p></p>
                    <p>Subtotal por unidad</p>
                </div>

                {cartLS.map((products) => {
                    const { id, brand, product, image, price, qty } = products;
                    return (
                        <div className={style.container} key={id}>
                            <h3>{brand}</h3>
                            <img src={image} alt={product} />
                            <p>{product}</p>
                            <p>{`$ ${price}`}</p>
                            <p>{qty}</p>
                            <CartButtons id={id}/>
                            <p>{`$ ${price * qty}`}</p>
                            <button className={style.delete} onClick={() => handleRemove(id)}>Eliminar</button>
                        </div>
                    );
                })}
                <div className={style.total}>
                    <h3>Total:</h3>
                    <p>{`$ ${total}`}</p>
                </div>
            </div>
        </div>
    )
}

export default CartShop

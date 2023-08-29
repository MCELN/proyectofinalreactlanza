import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import style from './css/cartShop.module.css';
import CartButtons from '../components/cartButtons/CartButtons';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import PayButton from '../components/payButton/PayButton';
import { Link } from 'react-router-dom';


const CartShop = () => {

    const [ currentUser ] = useContext(LoginContext);
    const [ , lS, setLS ] = useContext(CartContext);
    const [ total, setTotal ] = useState(0);
    const [ cartLS, setCartLS ] = useState([]);
    const navigate = useNavigate();

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
        currentUser.user === '' ? navigate('/') :
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
                            <Link to={`/products/${id}`}>
                                <img src={image} alt={product} />
                            </Link>
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
                <div className={style.payButton}>
                    <PayButton total={total} />
                </div>
            </div>
        </div>
    )
}

export default CartShop

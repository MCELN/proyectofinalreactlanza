import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { ProductsContext } from '../context/ProductsContext';
import Loading from '../components/loading/Loading';

const CartShop = () => {

    const [ ,, handleFirebase ] = useContext(ProductsContext);
    const [ , lS ] = useContext(CartContext);
    const [ total, setTotal ] = useState(0)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        handleFirebase()
        .catch((error) => setError(true))
        .then(() => setLoading(false));
    }, [handleFirebase]);

    


    return (
        <div>
            {loading ? <Loading /> : error ? "ERROR" : 
                CartShop
            }
        </div>
    )
}

export default CartShop

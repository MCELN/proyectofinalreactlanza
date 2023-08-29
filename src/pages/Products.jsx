import React, { useState, useContext } from 'react';
import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import Loading from '../components/loading/Loading';

import { ProductsContext } from '../context/ProductsContext';
import { LoginContext } from '../context/LoginContext';



const Products = () => {

    const [ ,, handleFirebase ] = useContext(ProductsContext);
    const [ ,,,setStock ] = useContext(LoginContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    

    handleFirebase()
        .catch((error) => setError(true))
        .then(() => setLoading(false));
        setStock(false);

    return (
        <div>
            {loading ? <Loading /> : error ? "ERROR" : 
            <ItemListContainer key={'itemList'} />
            }
        </div>
    )
}

export default Products

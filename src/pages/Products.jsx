import React, { useState, useEffect, useContext } from 'react';
import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import Loading from '../components/loading/Loading';

import { ProductsContext } from '../context/ProductsContext';



const Products = () => {

    const [ ,, handleFirebase ] = useContext(ProductsContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    

    useEffect(() => {
        handleFirebase()
        .catch((error) => setError(true))
        .then(() => setLoading(false));
    }, []);

    return (
        <div>
            {loading ? <Loading /> : error ? "ERROR" : 
            <ItemListContainer key={'itemList'} />
            }
        </div>
    )
}

export default Products

import React, { useState, useEffect } from 'react';
import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import Loading from '../components/loading/Loading';

import { getFirestore, collection, getDocs } from 'firebase/firestore';



const Products = () => {

    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    

    useEffect(() => {
        const db = getFirestore();

        const productCollection = collection(db, 'products');

        getDocs(productCollection)
        .then((snapshot) => {
            setProductsData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        })
        .catch((error) => setError(true))
        .then(() => setLoading(false));

    }, []);

    return (
        <div>
            {loading ? <Loading /> : error ? "ERROR" : 
            <ItemListContainer productsData={productsData} />
            }
        </div>
    )
}

export default Products

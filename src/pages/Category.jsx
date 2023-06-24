import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import Loading from '../components/loading/Loading';


const Category = () => {

    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const {categoryId} = useParams();

    useEffect(() => {
        const db = getFirestore();

        let categoryFilter = [categoryId];

        if(categoryId !== 'unisex') {
            categoryFilter.push('unisex');
        }
        const productsCollection = query(
            collection(db, 'products'),
            where('category', 'in', categoryFilter),
        );
        
        getDocs(productsCollection)
        .then((snapshot) => {
            setProductsData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        })
        .catch((error) => setError(true))
        .then(() => setLoading(false));
    }, [categoryId]);

    return (
        <div>
            {loading ? <Loading /> : error ? "ERROR" : 
            <ItemListContainer productsData={productsData} />
            }
        </div>
    )
}

export default Category

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/itemDetailContainer/ItemDetailContainer';
import Loading from '../components/loading/Loading';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Item = () => {

    const [productData, setProductData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const {productId} = useParams();


    useEffect(() => {

        const db = getFirestore();

        const productDoc = doc(db, 'products', productId);

        getDoc(productDoc)
        .then((snapshot) => {
            setProductData({id: snapshot.id, ...snapshot.data()});
        })
        .catch((error) => setError(true))
        .then(() => setLoading(false));

    }, [productId]);

    return (
        <div>
            {loading ? <Loading /> : error ? "ERROR" :
                <ItemDetailContainer productData={productData} />
            }
        </div>
    )
}

export default Item

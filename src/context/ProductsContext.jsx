import { useState, createContext } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {

    const [productsData, setProductsData] = useState([]);

    const handleFirebase = async () => {
        const db = getFirestore();

        const productCollection = collection(db, 'products');

        await getDocs(productCollection)
        .then((snapshot) => {
            setProductsData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        })
    }

    return (
        <ProductsContext.Provider value={[ productsData, setProductsData, handleFirebase ]}>
            {children}
        </ProductsContext.Provider>
    )
}
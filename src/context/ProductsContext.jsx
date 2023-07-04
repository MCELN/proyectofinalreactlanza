import { useState, createContext } from 'react';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';

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

    const handleEditFirebase = async (uid, prod) => {
        try {
            const db = getFirestore();
            
            const docRef = doc(db, 'products', uid);
            await updateDoc(docRef, prod);

        } catch (error) {
            console.error(error);
        }
        
    }

    return (
        <ProductsContext.Provider value={[ productsData, setProductsData, handleFirebase, handleEditFirebase ]}>
            {children}
        </ProductsContext.Provider>
    )
}
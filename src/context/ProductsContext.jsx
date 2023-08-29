import { useState, createContext } from 'react';
import { getFirestore, collection, getDocs, doc, updateDoc, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';


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

    const handleFirebaseAddProduct = async (newProduct) => {
        const db = getFirestore();

        const newUsersCollection = collection(db, 'products');
        await addDoc(newUsersCollection, newProduct)
        .then(({ id }) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Su producto ${newProduct.product} se ha agregado correctamente`,
                showConfirmButton: false,
                timer: 2500
            })
        });
    };

    return (
        <ProductsContext.Provider value={[ productsData, setProductsData, handleFirebase, handleEditFirebase, handleFirebaseAddProduct ]}>
            {children}
        </ProductsContext.Provider>
    )
}
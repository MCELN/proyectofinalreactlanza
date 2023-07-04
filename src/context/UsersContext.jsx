import { createContext, useState } from 'react';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';


export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {

    const [ users, setUsers ] = useState([]);

    const handleFirebaseUsers = async () => {
        const db = getFirestore();

        const usersCollection = collection(db, 'users');
        await getDocs(usersCollection)
        .then((snapshot) =>  {
            setUsers(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        });
    };

    const handleFirebaseAddUser = async (newUser) => {
        const db = getFirestore();

        const newUsersCollection = collection(db, 'users');
        await addDoc(newUsersCollection, newUser)
        .then(({ id }) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Bienvenido a Fragiancias de Nicho ${newUser.name}!!!`,
                showConfirmButton: false,
                timer: 2500
            })
        });
    };


    return (
        <UsersContext.Provider value={[ users, handleFirebaseUsers, handleFirebaseAddUser ]}>
            { children } 
        </UsersContext.Provider>
    )

}
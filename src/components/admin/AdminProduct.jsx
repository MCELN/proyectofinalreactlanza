import { useState, useEffect, useContext } from 'react';
import style from './adminProduct.module.css';
import Loading from '../loading/Loading';
import ItemListContainer from '../itemListContainer/ItemListContainer';
import AddProduct from './AddProduct';
import { ProductsContext } from '../../context/ProductsContext';
import { LoginContext } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';

const AdminProduct = () => {

    const [ ,,handleFirebase ] = useContext(ProductsContext);
    const [ currentUser,,, setStock ] = useContext(LoginContext);
    const [ selectOption, setSelectOption ] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        handleFirebase()
        .catch((error) => setError(true))
        .then(() => setLoading(false));
        setStock(true);
    }, []);

    const handleStock = () => {
        setSelectOption("stock");
    }

    const handleAddProduct = () => {
        setSelectOption("addProduct");
    }


    return (
        currentUser.lvl !== 'admin' ? navigate('/') : loading ? <Loading /> : error ? "ERROR" :
        <div>
            <h3>Administración de productos</h3>
            <div className={style.container}>
                <div className={style.buttons}>
                    <button onClick={handleStock}>Administrar Stock</button>
                    <button onClick={handleAddProduct}>Agregar Producto</button>
                </div>
                <div>
                    {selectOption === "stock" ?
                        <ItemListContainer /> :
                        selectOption === 'addProduct' ?
                        <AddProduct /> :
                        <h4>Elija una opcion</h4>
                    }
                </div>
            </div>
        </div>        
    )
}

export default AdminProduct

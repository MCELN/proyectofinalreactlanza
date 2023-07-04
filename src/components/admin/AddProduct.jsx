import { useContext, useState } from 'react';
import style from '../../pages/css/registerUser.module.css';
import { ProductsContext } from '../../context/ProductsContext';
import { useNavigate } from 'react-router-dom';



const AddProduct = () => {

    const [ ,,,,handleFirebaseAddProduct ] = useContext(ProductsContext);
    const navigate = useNavigate();

    const [ values, setValues ] = useState({
        brand: "",
        product: "",
        description: "",
        image: "",
        category: "",
        price: 0,
        stock: 0,
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleForm = (e) => {
        e.preventDefault();
        handleFirebaseAddProduct(values);
        setValues({
            brand: "",
            product: "",
            description: "",
            image: "",
            category: "",
            price: 0,
            stock: 0,
        });
        navigate('/admin');
    }

    return (
        <div>
            <h2 className={style.title}>Regístrate</h2>
            <div className={style.container}>
                <form onSubmit={handleForm}>
                    <input 
                        type="text"
                        name='brand'
                        value={values.brand}
                        placeholder='Marca' 
                        onChange={handleInputChange}
                    />

                    <input 
                        type="text"  
                        name='product'
                        value={values.product}                   
                        placeholder='Nombre del Producto' 
                        onChange={handleInputChange}
                    />

                    <input 
                        type="text" 
                        name='description' 
                        value={values.description}                  
                        placeholder='Descripción' 
                        onChange={handleInputChange}
                    />

                    <input 
                        type="text" 
                        name='image'
                        value={values.image}                
                        placeholder='URL de la imagen' 
                        onChange={handleInputChange}
                    />

                    <input 
                        type="text"
                        name='category'  
                        value={values.category}              
                        placeholder='Male, Female o Unisex' 
                        onChange={handleInputChange}
                    />

                    <input 
                        type="number"
                        name='price'  
                        value={values.price}                 
                        placeholder='Precio' 
                        onChange={handleInputChange}
                    />
                    
                    <input 
                        type="number"
                        name='stock'
                        value={values.stock}                   
                        placeholder='stock' 
                        onChange={handleInputChange}
                    />

                <button type='submit'>Confirmar</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct

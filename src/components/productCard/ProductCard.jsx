import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartButtons from '../cartButtons/CartButtons';
import style from './productCard.module.css';
import { LoginContext } from '../../context/LoginContext';


const ProductCard = ({ productsData }) => {

    const [users] = useContext(LoginContext);

    console.log(users);
    const {id, brand, product, image, price} = productsData;
    return (
        <div>
                <div key={id} className={style.boxProduc}>
                    <h3>{brand}</h3>
                    <Link to={`/products/${id}`} className={style.link}>
                        <img src={image} alt={product} />
                    </Link>            
                    <p>{product}</p>
                    <p className={style.buy}>{`$ ${price}`}</p>
                    {users && <CartButtons />}
                </div>
        </div>
    )
}

export default ProductCard

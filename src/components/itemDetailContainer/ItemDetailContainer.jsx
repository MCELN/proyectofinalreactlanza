import { useContext } from 'react';
import CartButtons from '../cartButtons/CartButtons';
import style from "./itemDetailContainer.module.css";
import { LoginContext } from '../../context/LoginContext';


const ItemDetailContainer = ({productData}) => {

    const [users] = useContext(LoginContext);

    const {id, brand, image, product, description, category, price} = productData;

    return (
        <div key={id}>
            <h3 className={style.title}>{brand}</h3>            
            <div className={style.container}>
                <div>
                    <img className={style.imageParfum} src={image} alt={product} />
                </div>
                <div className={style.containerDescription}>
                    <p className={style.subTitle}>{product}</p>
                    <p className={style.gender}>{category[0].toUpperCase() + category.substring(1)}</p>
                    <p className={style.description}>{description}</p>
                    <p className={style.price}>{`Precio: $ ${price}`}</p>
                    {users && <CartButtons />}

                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer
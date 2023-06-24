import React from 'react';
import { Link } from 'react-router-dom';
import CartButtons from '../cartButtons/CartButtons';
import style from './productCard.module.css';

const ProductCard = ({ productsData }) => {

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
                    <CartButtons />
                </div>
        </div>
    )
}

export default ProductCard

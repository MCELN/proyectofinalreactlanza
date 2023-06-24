import React from 'react';
import ProductCard from '../productCard/ProductCard';
import style from './itemListContainer.module.css';


const ItemListContainer = ({productsData}) => {

    return (
        <div className={style.container}>
            {productsData.map(product => {
                return (
                    <div className={style.item}>
                        <ProductCard key={product.id} productsData={product} />
                    </div>
                )
            })}        
        </div>
    )
}

export default ItemListContainer

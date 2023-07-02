import { useContext } from 'react';
import ProductCard from '../productCard/ProductCard';
import style from './itemListContainer.module.css';
import { ProductsContext } from '../../context/ProductsContext';


const ItemListContainer = () => {

    const [ productsData ] = useContext(ProductsContext);

    return (
        <div className={style.container}>
            {productsData.map((product) => {
                return (
                    <div key={product.id} className={style.item}>
                        <ProductCard key={product.id} productsData={product} />
                    </div>
                )
            })}        
        </div>
    )
}

export default ItemListContainer

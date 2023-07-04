import { useContext, useState } from 'react';
import style from '../cartButtons/cartButtons.module.css'
import { ProductsContext } from '../../context/ProductsContext';
import Swal from 'sweetalert2';

const StockButton = ({ id }) => {

    const [ productsData, , , handleEditFirebase ] = useContext(ProductsContext);
    const [ unit, setUnit ] = useState(0);

    const handleRemoveClick = () => {
        unit > 0 && setUnit(unit - 1);
    }

    const handleAddClick = () => {
        setUnit(unit + 1);
    }

    const handleAddStock = async () => {
        const newStock = productsData.find(p => p.id === id);
        newStock.stock += unit;
        await handleEditFirebase(newStock.id, newStock);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Ha agregado ${unit} de stock al producto ${newStock.product}.`,
            showConfirmButton: false,
            timer: 2500
        })
        setUnit(0);
    }

    return (
        <div className={style.menuAdd}>
            <div className={style.count}>
                <button onClick={handleRemoveClick}>-</button>
                <input type="text" value={unit} id='valueInput' readOnly />
                <button onClick={handleAddClick}>+</button>
            </div>
            <button className={style.addCart} onClick={handleAddStock}>Modificar Stock</button>
        </div>
    )
}

export default StockButton

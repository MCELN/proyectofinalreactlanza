import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ProductsContext } from '../../context/ProductsContext';
import Loading from '../loading/Loading';
import style from './payButton.module.css';
import Swal from 'sweetalert2';

const PayButton = ({total}) => {

    const navigate = useNavigate();
    const [ productsData,, handleFirebase, handleEditFirebase ] = useContext(ProductsContext);
    const [ , lS, setLS ] = useContext(CartContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    handleFirebase()
        .catch((error) => setError(true))
        .then(() => setLoading(false));

    const handlePay = async () => {
        const tempProd = productsData.filter((p) => lS.find(s => s.id === p.id));
        const prodOut = tempProd.filter((p) => lS.find(s => s.id === p.id).qty > p.stock);
        const arrayShowProd = prodOut.map(p => p.product);
        if(arrayShowProd.length > 0) {
            const showProd = arrayShowProd.join(', ');
            Swal.fire({
                icon: 'error',
                title: 'Lo sentimos. Ya no disponemos de stock para los productos:',
                text: `${showProd}.`,
            });
            const newLS = lS.map((p) => {
                const temp = prodOut.find(s => s.id === p.id);
                if(temp) {
                    return {
                        ...p,
                        qty: 0
                    };
                }
                return p;
            })
            setLS(newLS);
        } else if(tempProd.length > 0) {
            tempProd.forEach(async (e) => {
                const temp = lS.find(s => s.id === e.id);
                e.stock -= temp.qty;
                await handleEditFirebase(e.id, e);
            })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Su compra fue realizada con exito!!!",
                showConfirmButton: false,
                timer: 2500
            })
            setLS([]);
            navigate('/');
        }
    }
    return (
        loading ? <Loading /> : error ? "ERROR" : 
            total !== 0 && <button className={style.button} onClick={handlePay}>Pagar</button>
    )
}

export default PayButton

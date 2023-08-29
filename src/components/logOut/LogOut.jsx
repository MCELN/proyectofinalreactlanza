import { useContext, useEffect } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const LogOut = () => {

    const [ currentUser, setCurrentUser ] = useContext(LoginContext);
    const [ ,lS, setLS ] = useContext(CartContext)
    const navigate = useNavigate();


    useEffect(() => {
        lS.length === 0 && localStorage.removeItem(currentUser.user);
        setCurrentUser({user: ''});
        localStorage.removeItem('User');
        sessionStorage.removeItem('User');
        setLS([]);
        navigate('/');
    }, [currentUser, lS, setCurrentUser, setLS, navigate])
    

    return (
        <></>
    )
}

export default LogOut

import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UsersContext } from '../context/UsersContext';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import style from './css/registerUser.module.css';

const Login = () => {

    const [ users, handleFirebaseUsers, ] = useContext(UsersContext);
    const [ currentUser, setCurrentUser ] = useContext(LoginContext);
    const [ user, setUser ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ showErrorRequired, setShowErrorRequired ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        handleFirebaseUsers();
    }, []);

    const handleUser = (e) => {
        setUser(e.target.value)
        setShowErrorRequired(false);
    };

    const handlePass = (e) => {
        setPass(e.target.value);
        setShowErrorRequired(false);
    };

    

    const handleConfirm = () => {
        if(user !== '' && pass !== '') {
            const checkUser = users.find(u => u.pass === pass && (u.user === user || u.email === user));
            if(checkUser !== undefined) {
                setCurrentUser(checkUser);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Nombre de usuario o contraseña incorrecto',
                    text: 'Intente nuevamente',
                })
            }
        } else {
            setShowErrorRequired(true);
        }
    };

    return (
        currentUser.user !== '' ? navigate('/') :
        <div>
            <h2 className={style.title}>Iniciar Sesión</h2>
            <div className={style.container}>
                <div>
                    <input 
                        type="text" 
                        id='name' 
                        name='name'
                        placeholder='Usuario o E-Mail' 
                        onChange={handleUser}
                        required />
                </div>
                <div>
                    <input 
                        type="password" 
                        id='pass' 
                        name='pass'                
                        placeholder='Contraseña' 
                        onChange={handlePass}
                        required />
                </div>
                {/* <div className={style.checkbox}>
                    <label htmlFor="remember">Recordar: </label>
                    <input type="checkbox" name='remember' value={false} onChange={handleRemember}/>                    
                </div> */}
                {showErrorRequired && <p style={{color: 'red', fontSize: 16}}>Todos los campos son requeridos.</p>}
                <button onClick={handleConfirm}>Confirmar</button>
                <Link className={style.link} to={'/login/register'}>Registrarse</Link>
            </div>
        </div>
    )
}

export default Login

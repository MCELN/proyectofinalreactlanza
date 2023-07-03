import React, { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../context/UsersContext';
import { useNavigate } from 'react-router-dom';
import style from './css/registerUser.module.css';
import { LoginContext } from '../context/LoginContext';


const RegisterUser = () => {

    const [ users, handleFirebaseUsers, handleFirebaseAddUser ] = useContext(UsersContext);
    const [ currentUser, ] = useContext(LoginContext);
    const [ name, setName ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ user, setUser ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ confirmPass, setConfirmPass] = useState('');
    const [ showErrorUser, setShowErrorUser ] = useState(false);
    const [ showErrorEmail, setShowErrorEmail ] = useState(false);
    const [ showErrorPass, setShowErrorPass ] = useState(false);
    const [ showErrorRequired, setShowErrorRequired ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        handleFirebaseUsers();
    }, []);

    
    const handleName = (e) => {
        setName(e.target.value)
        setShowErrorRequired(false);
    };

    const handleLastname = (e) => {
        setLastname(e.target.value);
        setShowErrorRequired(false);
    };

    const handleUser = (e) => {
        setShowErrorUser(false);
        setUser(e.target.value);
        setShowErrorRequired(false);
    };

    const handleOnBlurUser = (e) => {
        const checkUser = users.find(u => u.user === user);
        if(checkUser) {
            setShowErrorUser(true);
        }
    };

    const handleEmail = (e) => {
        setShowErrorEmail(false);
        setEmail(e.target.value)
        setShowErrorRequired(false);
    };

    const handleOnBlurEmail = (e) => {
        const checkEmail = users.find(u => u.email === email);
        if(checkEmail) {
            setShowErrorEmail(true);
        }
    };

    const handlePass = (e) => {
        setPass(e.target.value);
        setShowErrorRequired(false);
    };

    const handleConfirmPass = (e) => {
        setShowErrorPass(false);
        setConfirmPass(e.target.value);
        setShowErrorRequired(false);
    };

    const handleOnBlurPass = (e) => {
        if(confirmPass !== pass) {
            setShowErrorPass(true);
        }
    };

    const handleConfirm = (e) => {
        e.preventDefault();
        const newUser = {
            name,
            lastname,
            user,
            email,
            pass,
        }
        if(name !== '' && lastname !== '' && user !== '' && email !== '' && pass !== '' && confirmPass !== ''){
            if(!showErrorUser && !showErrorEmail && !showErrorPass){
                handleFirebaseAddUser(newUser);
                navigate('/login');
            }
        } else {
            setShowErrorRequired(true);
        }
    }



    return (
        currentUser.user !== '' ? navigate('/') :
        <div>
            <h2 className={style.title}>Regístrate</h2>
            <div className={style.container}>
                <div>
                    <input 
                        type="text" 
                        id='name' 
                        name='name'
                        placeholder='Nombre' 
                        onChange={handleName}
                        required />
                </div>
                <div>
                    <input 
                        type="text" 
                        id='lastname' 
                        name='lastname'                   
                        placeholder='Apellido' 
                        onChange={handleLastname}
                        required />
                </div>
                <div>
                    <input 
                        type="text" 
                        id='user' 
                        name='user'                   
                        placeholder='Nombre de ususario' 
                        onChange={handleUser} 
                        onBlur={handleOnBlurUser} 
                        required />
                </div>
                {showErrorUser && <p style={{color: 'red', fontSize: 16}}>Usuario existente!</p>}
                <div>
                    <input 
                        type="email" 
                        id='email' 
                        name='email'                
                        placeholder='E-Mail' 
                        onChange={handleEmail} 
                        onBlur={handleOnBlurEmail} 
                        required />
                </div>
                {showErrorEmail && <p style={{color: 'red', fontSize: 16}}>E-Mail existente!</p>}
                <div>
                    <input 
                        type="password" 
                        id='pass' 
                        name='pass'                
                        placeholder='Contraseña' 
                        onChange={handlePass}
                        required />
                </div>
                <div>
                    <input 
                        type="password" 
                        id='confirmPass' 
                        name='confirmPass'                   
                        placeholder='Contraseña' 
                        onChange={handleConfirmPass} 
                        onBlur={handleOnBlurPass} 
                        required />
                </div>
                {showErrorPass && <p style={{color: 'red', fontSize: 16}}>Confirmación de contraseña incorrecta!</p>}
                {showErrorRequired && <p style={{color: 'red', fontSize: 16}}>Todos los campos son requeridos.</p>}
                <button onClick={handleConfirm}>Confirmar</button>
            </div>
        </div>
    )
}

export default RegisterUser

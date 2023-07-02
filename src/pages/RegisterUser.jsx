import React, { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../context/UsersContext';


const RegisterUser = () => {

    const [ users, handleFirebaseUsers, handleFirebaseAddUser ] = useContext(UsersContext);
    const [ name, setName ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ user, setUser ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ confirmPass, setConfirmPass] = useState('');
    const [ showErrorUser, setShowErrorUser ] = useState(false);
    const [ showErrorEmail, setShowErrorEmail ] = useState(false);
    const [ showErrorPass, setShowErrorPass ] = useState(false);

    useEffect(() => {
        handleFirebaseUsers();
    }, []);

    const handleName = (e) => {
        setName(e.target.value)
        console.log(e.target.value);
    };

    const handleLastname = (e) => {
        setLastname(e.target.value);
    };

    const handleUser = (e) => {
        setShowErrorUser(false);
        setUser(e.target.value);
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
    };

    const handleOnBlurEmail = (e) => {
        const checkEmail = users.find(u => u.email === email);
        if(checkEmail) {
            setShowErrorEmail(true);
        }
    };

    const handlePass = (e) => {
        setPass(e.target.value);
    };

    const handleConfirmPass = (e) => {
        setShowErrorPass(false);
        setConfirmPass(e.target.value);
    };

    const handleOnBlurPass = (e) => {
        if(confirmPass !== pass) {
            setShowErrorPass(true);
        }
    };

    const handleConfirm = () => {
        const newUser = {
            name,
            lastname,
            user,
            email,
            pass,
        }
        
        if(!showErrorUser && !showErrorEmail && !showErrorPass) {
            handleFirebaseAddUser(newUser);
        }
    }



    return (
        <div>
            <h2>Regístrate</h2>
            <div>
                <label htmlFor='name'>Nombre: </label>
                <input type="text" id='name' palceholder='Nombre' onChange={handleName} required />
                <label htmlFor="lastname">Apellido: </label>
                <input type="text" id='lastname' placeholder='Apellido' onChange={handleLastname} required />
                <label htmlFor="user">Usuario: </label>
                <input type="text" id='user' placeholder='Nombre de ususario' onChange={handleUser} onBlur={handleOnBlurUser} required />
                {showErrorUser && <p style={{color: 'red', fontSize: '10px'}}>Usuario existente!</p>}
                <label htmlFor="email">E-Mail: </label>
                <input type="email" id='email' placeholder='E-Mail' onChange={handleEmail} onBlur={handleOnBlurEmail} required />
                {showErrorEmail && <p style={{color: 'red', fontSize: '10px'}}>E-Mail existente!</p>}
                <label htmlFor="pass">Contraseña: </label>
                <input type="password" id='pass' placeholder='Contraseña' onChange={handlePass} required />
                <label htmlFor="checkpass">Confirme Contraseña: </label>
                <input type="password" id='checkpass' placeholder='Contraseña' onChange={handleConfirmPass} onBlur={handleOnBlurPass} required />
                {showErrorPass && <p style={{color: 'red', fontSize: '10px'}}>Confirmación de contraseña incorrecta!</p>}
                <button onClick={handleConfirm}>Confirmar</button>
            </div>
        </div>
    )
}

export default RegisterUser

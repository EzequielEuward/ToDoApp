import { useState, useEffect } from 'react';
import { useLogin } from '../Hooks/useLogin'
import './Login.css';


export const LoginApp = () => {

    const { formState, onInputChange,onResetForm, username, password, email } = useLogin({
        username: '',
            email: '',
            password: '',
    })


    useEffect(() => {

    }, [formState]);

    useEffect(() => {

    }, [email]);


    return (
        <>
            <div className='form'>

                <span className='title'>Inicio Sesión</span>

                <label className='label'>Email</label>
                <input
                    type="email"
                    className='input'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    required= ''
                    maxLength={40}
                />

                <label className='label' >Nombre</label>
                <input
                    type="text"
                    name='username'
                    className='input'
                    placeholder='Nombre'
                    value={username}
                    onChange={onInputChange}
                    required= ''
                    maxLength={40}
                />

                <label className='label'>Contraseña</label>
                <input
                    type="password"
                    className='input'
                    placeholder='Contraseña'
                    name='password'
                    value={password}
                    onChange={onInputChange}
                    required= ''
                    maxLength={40}
                />

                <button type="submit" className="submit" onClick={onResetForm} >Enviar</button>

            </div>


        </ >
    )
}

export default LoginApp

import React, {useContext, useState} from 'react';
import logoSmall from '../components/img/MnC_logo_small.png';
import {AuthContext} from "../context/auth";
import { useNavigate } from "react-router-dom";

const Login = ({profile}) => {

    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')

    const login = async (event) => {
        event.preventDefault()
        console.log('isAuth in Login "' + isAuth + '"')
        console.log('Profile in Login "' + profile + '"')
        console.log('LS in Login "' + localStorage.getItem('auth') + '"')
        if ((username === profile[0].username && pass === '') || isAuth) {
            setIsAuth(true)
            localStorage.setItem('auth', 'true')
            navigate('/')
        }
        else alert('Неправильные имя пользователя или пароль.')
    }

    return (
        <div className='login d-flex align-items-center overflowHide'>
            <div className='d-flex flex-column form-container mx-auto'>
                <div className='flex-grow-1 d-flex align-items-center auth-form'>
                    <div className='w-100'>
                        <div className='text-center'>
                            <img className='logo' src={logoSmall} alt={'Logo'}/>
                        </div>
                        <div>
                            <form className='d-flex flex-column' onSubmit={login}>
                                <div className="form-group mb-3">
                                    <label className='form-label'>
                                        Имя пользователя
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label className='form-label'>
                                        Пароль
                                    </label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        value={pass}
                                        onChange={e => setPass(e.target.value)}
                                    />
                                </div>
                                {/*<div className="form-group mb-3">*/}
                                {/*    <input type='checkbox' className='form-check-input'/>*/}
                                {/*    <label className='form-check-label mx-2'>*/}
                                {/*        Запомнить меня*/}
                                {/*    </label>*/}
                                {/*</div>*/}
                                <button className='btn btn-primary'>Вход</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
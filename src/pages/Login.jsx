import React, {useContext, useState} from 'react';
import logoSmall from '../components/img/MnC_logo_small.png';
import {AuthContext} from "../context/authContext";
import { useNavigate } from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Login = ({profile}) => {

    const {store} = useContext(Context)
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async (event) => {
        event.preventDefault()
        if (email === profile[0].email && password === '') {
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
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label className='form-label'>
                                        Пароль
                                    </label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                {/*<div className="form-group mb-3">*/}
                                {/*    <input type='checkbox' className='form-check-input'/>*/}
                                {/*    <label className='form-check-label mx-2'>*/}
                                {/*        Запомнить меня*/}
                                {/*    </label>*/}
                                {/*</div>*/}
                                <button className='btn btn-primary' onClick={() => store.login(email, password)}>
                                    Вход
                                </button>
                                <button className='btn btn-primary' onClick={() => store.registration(email, password)}>
                                    Регистрация
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(Login);
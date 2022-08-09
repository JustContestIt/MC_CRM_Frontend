import React, {useContext} from 'react';
import logo from '../components/img/logo.png';
import {AuthContext} from "../context/auth";

const Login = () => {

    // const [isAuth, setIsAuth] = useContext(AuthContext)

    const login = event => {
        event.preventDefault()
        // setIsAuth(true)
    }

    return (
        <div className='wrapper-login d-flex align-items-center'>
            <div className='d-flex flex-column form-container mx-auto'>
                <div className='flex-grow-1 d-flex align-items-center auth-form'>
                    <div className='w-100'>
                        <div className='text-center'>
                            <img className='mx-auto logo' src={logo}/>
                        </div>
                        <div>
                            <form className='d-flex flex-column'>
                                <div className="form-group mb-3">
                                    <label className='form-label'>
                                        Имя пользователя или E-mail
                                    </label>
                                    <input type='email' className='form-control'/>
                                </div>
                                <div className="form-group mb-3">
                                    <label className='form-label'>
                                        Пароль
                                    </label>
                                    <input type='password' className='form-control'/>
                                </div>
                                <div className="form-group mb-3">
                                    <input type='checkbox' className='form-check-input'/>
                                    <label className='form-check-label mx-2'>
                                        Запомнить меня
                                    </label>
                                </div>
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
import React, { useState } from 'react'
import axios from 'axios';
import validator from 'validator';
import "./Register.css";
//import { DOMEN_SERVER, DOMEN_SITE } from '../../config/const';

const Register = () => {
    const [register, setRegister] = useState(() => {
        return {
            username: "",
            email: "",
            password: "",
            password2: "",
        }
    })

    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }


    const submitChackin = event => {
        event.preventDefault();
        if(!validator.isEmail(register.email)) {
            alert("Вы не ввели электронную почту")
        } else if(register.password !== register.password2) {
            alert("Повторный пароль некорректен")
        } else if(!validator.isStrongPassword(register.password, {minSymbols: 0})) {
            alert("Пароль должен состоять из одной строчной, одной прописной буквы и цифры, и состоять не менее чем из 8 символов")
        } else {
            axios.post("http://192.168.0.169:3000" + "/auth/registration/", {
                username: register.username,
                email: register.email,
                password: register.password,
            }).then(res => {
                if (res.data === true) {
                    window.location.href = "http://192.168.0.169:3000" + "/auth"
                } else {
                    alert("Пользователь с таким адресом электронной почты уже есть")
                }
            }).catch(() => {
                alert("Произошла ошибка на сервере")
            })
        }
    }

    return (
        <div className="form">
            <h2>Регистрация:</h2>
            <form onSubmit={submitChackin}>
                <p>Имя: <input
                    type="username"
                    id="username"
                    name="username"
                    value={register.username}
                    onChange={changeInputRegister}
                /></p>
                <p>Email: <input
                    type="email"
                    id="email"
                    name="email"
                    value={register.email}
                    onChange={changeInputRegister}
                    formnovalidate
                /></p>
                <p>Пароль: <input
                    type="password"
                    id="password"
                    name="password"
                    value={register.password}
                    onChange={changeInputRegister}
                /></p>
                <p>Повторите пароль: <input
                    type="password"
                    id="password2"
                    name="password2"
                    value={register.password2}
                    onChange={changeInputRegister}
                /></p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Register
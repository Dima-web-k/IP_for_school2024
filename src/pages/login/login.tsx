// import '../../index.css'
import style from './login.module.css'
import {LoginBG} from './login_pageBG'

export default function LoginPage() {
    let title= document.getElementById('head_title')!
    title.textContent='Login'
    return (
        <>
            <h1>Вход</h1>
            <form className={style.form} method="get" action="../result">
                <label>
                    <span>Логин:</span>
                    <input type="text" size={40} name="one-line"/>
                </label>

                <label>
                    <span>Пароль:</span>
                    <input type="password" size={40} name="one-line-password"/>
                </label>
                <input type="submit" value="Отправить"/>
            </form>
            <LoginBG/>
        </>
    )
}
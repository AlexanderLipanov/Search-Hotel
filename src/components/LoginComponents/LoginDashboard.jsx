import React from 'react';
import './LoginDashboard.css';

export default  class LoginDashboard extends React.Component {

    render() {
        return (
            <div className="loginDashboard">
                <div className="loginDashboardBlur">
                    <div className="formBlock">
                        <div className="formContainer">
                            <h2 className="nameApplication">Simple Hotel Check</h2>
                                <div className="loginContainerInput">
                                    <h4 className="loginInputName">Логин</h4>
                                        <div className="loginBlockInput">
                                            <input type="text" className="loginInput" />
                                        </div>
                                    <p className="errorValidLogin">Не валидный логин</p>
                                </div>
                                <div className="passwordContainerInput">
                                    <h4 className="passwordInputName">Пароль</h4>
                                        <div className="passwordBlockInput">
                                            <input type="text" className="passwordInput" />
                                        </div>
                                    <p className="errorValidPassword">Не валидный пароль</p>
                                </div>
                            <button className="signIn">Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
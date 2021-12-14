import React from 'react';
import './LoginDashboard.css';
import { connect } from 'react-redux';
import {inputEmail, inputPassword, signIn, logInCookies} from '../../redux/actions/actionCreatore';
import {Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';

class LoginDashboard extends React.Component  {

    /* ввод email в state */

    emailInput = (email) => {

        this.props.inputEmail(email);
    }

    /* ввод password в state */

    passwordInput = (password) => {

        this.props.inputPassword(password);
    }

    /* функция входа в приложение */

    signIn = () => {

        this.props.signIn();
    }

    logInCookies = () => {
        this.props.logInCookies();
    }

    render() {


        /* делает проверку на логинизацию и если пользователь не залогирован, перенаправляет на страницу регистрации/логинизации */

        if ((Cookies.get('email') === this.props.emailForLogIn) 
            && (Cookies.get('password') === this.props.passwordForLogIn)) {
                this.logInCookies();
            } 
        if (this.props.isLogIn === true)  {
                return <Navigate to='/template' />;
            }

        const loginBlockInput = 'loginContainerInput';
        const loginBlockInputError = 'loginContainerInputError'; 

        const passwordContainerInput = 'passwordContainerInput';
        const passwordContainerInputError = 'passwordContainerInputError';

        return (
            <div className="loginDashboard">
                <div className="loginDashboardBlur">
                    <div className="formBlock">
                        <div className="formContainer">
                            <h2 className="nameApplication">Simple Hotel Check</h2>
                            
                                <div className={ this.props.emailValid ? loginBlockInput : loginBlockInputError }>
                                    <h4 className="loginInputName">Логин</h4>
                                        <div className="loginBlockInput">
                                            <input onChange={ (e) => this.emailInput(e.target.value)} value={this.props.emailInput} type="text" className="loginInput" />
                                        </div>
                                        {this.props.emailValid 
                                        ? null 
                                        : <p className="errorValidLogin">Не правильный логин</p> }
                                        {this.props.emailValidation 
                                        ? null
                                        : <p className="errorValidLogin">Только латинские символы</p>  }
                                </div>
                                <div className={ this.props.passwordValid ? passwordContainerInput : passwordContainerInputError }>
                                    <h4 className="passwordInputName">Пароль</h4>
                                        <div className="passwordBlockInput">
                                            <input onChange={ (e) => this.passwordInput(e.target.value)} value={this.props.passwordInput} 
                                            type="password" className="passwordInput" />
                                        </div>
                                        {this.props.passwordValid 
                                        ? null 
                                        : <p className="errorValidPassword">Не правильный пароль</p> }
                                        {this.props.passwordValidation 
                                        ? null 
                                        : <p className="errorValidPassword">Пароль меньше 8 символов</p> }
                                </div>
                            <button onClick={ () => this.signIn() }  className="signIn">Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {

    return {
        emailInput: state.loginReducer.emailInput,
        passwordInput: state.loginReducer.passwordInput,
        emailInputCookie: state.loginReducer.emailInputCookie,
        passwordInputCookie: state.loginReducer.passwordInputCookie,
        isLogIn: state.loginReducer.isLogIn,
        emailValid: state.loginReducer.emailValid,
        passwordValid: state.loginReducer.passwordValid,
        emailValidation: state.loginReducer.emailValidation,
        passwordValidation: state.loginReducer.passwordValidation,
        emailForLogIn: state.loginReducer.emailForLogIn,
        passwordForLogIn: state.loginReducer.passwordForLogIn,
    }
}

export default connect(mapStateToProps ,{inputEmail, inputPassword, signIn, logInCookies})(LoginDashboard);
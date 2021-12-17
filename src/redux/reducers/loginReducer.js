export const INPUT_EMAIL = 'INPUT_EMAIL';
export const INPUT_PASSWORD = 'INPUT_PASSWORD';
export const SIGN_IN = 'SIGN_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_COOKIES = 'LOG_IN_COOKIES';

let initialState = {

    emailForLogIn: 'email@test.com',
    passwordForLogIn: 'password',
    emailInput: '',
    passwordInput: '',
    emailInputCookie: '',
    passwordInputCookie: '',
    isLogIn: null,
    emailValid: true,
    passwordValid: true,
    emailValidation: true,
    passwordValidation: true,
}

const loginReducer = (state = initialState, {type, email, password}) => {

    switch(type) {

        case INPUT_EMAIL: // записываем email в state

        let copyStateEmail = {...state};
            copyStateEmail.emailInput = email;
        const reg = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;
            if (reg.test(String(email).toLowerCase()) === true) {
                copyStateEmail.emailValidation = true;
            } else {
                copyStateEmail.emailValidation = false;
            }

            return copyStateEmail;

        case INPUT_PASSWORD: // записываем password в state

            let copyStatePassword = {...state};
                copyStatePassword.passwordInput = password;
                if (copyStatePassword.passwordInput.split('').length < 8) {
                    copyStatePassword.passwordValidation = false;
                } else {
                    copyStatePassword.passwordValidation = true;
                }

            return copyStatePassword;

        case SIGN_IN: // вход в приложение
            
            let copyState = {...state};    
            
            /** логинизация */

            if ((copyState.emailInput === copyState.emailForLogIn) 
                && (copyState.passwordInput === copyState.passwordForLogIn)) {
                copyState.emailValid = true;
                copyState.passwordValid = true;
                copyState.isLogIn = true;
                copyState.emailInputCookie = copyState.emailInput;
                copyState.passwordInputCookie = copyState.passwordInput;
            }  else {
                copyState.emailValid = false;
                copyState.passwordValid = false;
                copyState.isLogIn = false;
            }

            return copyState;

        case LOG_OUT: // выход из приложения
            return {
                ...state,
                emailInput: '',
                passwordInput: '',
                emailInputCookie: '',
                passwordInputCookie: '',
                isLogIn: null,
            }

        case LOG_IN_COOKIES:
            return {...state,
                isLogIn: true
            }; 

    default: return state;        
    }
}

export default loginReducer;
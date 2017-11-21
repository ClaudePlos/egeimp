import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';
import auth from '../auth/authenticator';
import Alert from 'react-s-alert';

export function loginSuccess() {
    return {type: types.LOG_IN_SUCCESS}
}

export function loginUser(credentials) {
    return function(dispatch) {
        return sessionApi.login(credentials).then(response => {

            if (response.token) {
                sessionStorage.setItem('jwt', response.token);
                dispatch(loginSuccess());
            } else {
                Alert.error('Bad login or pass');
            }

        }).catch(error => {
            debugger;
            throw(error);
        });
    };
}



export function logOutUser() {
    auth.logOut();
    return {type: types.LOG_OUT}
}
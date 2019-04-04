import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';
import egeriaApi from '../api/EgeriaApi';////
import auth from '../auth/authenticator';
import Alert from 'react-s-alert';

export function loginSuccess() {
    return {type: types.LOG_IN_SUCCESS}
}

export function loginUser(credentials) {
    return function(dispatch) {
        return sessionApi.login(credentials).then(response => {
            console.log(response.token);
            if (response.token) {
                sessionStorage.setItem('jwt', response.token);
                sessionStorage.setItem('dane', JSON.stringify(response));
                dispatch(loginSuccess());
            } else {
                Alert.error('Bad login or pass');
            }

        }).catch(error => {
            Alert.error('Bad login or pass');
            throw(error);
        });
    };
}


export function actUploadDataInvoiceMotozegToEgeria(data) {
    return function(dispatch) {
        return egeriaApi.uploadDataInvoiceMotozegToEgeria(data).then(response => {

            if (response) {
                Alert.error('OK');
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
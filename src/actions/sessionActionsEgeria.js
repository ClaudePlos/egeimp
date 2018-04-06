import egeriaApi from '../api/EgeriaApi';
import Alert from 'react-s-alert';

    export function actUploadDataInvoiceMotozegToEgeria(data) {
        return function (dispatch) {
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



    export function getContactsIn() {
        console.log('Get ContactIn 2.');
        return function(dispatch) {
            return egeriaApi.getContactInApi().then(response => {

                console.log(response);

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

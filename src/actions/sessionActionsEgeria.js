import egeriaApi from '../api/EgeriaApi';
import Alert from 'react-s-alert';

// Initial

    export function actUploadDataInvoiceMotozegToEgeria(data) {
        return function (dispatch) {
            return egeriaApi.uploadDataInvoiceMotozegToEgeria(data).then(response => {

                if (response) {

                    //Return check
                    console.log(response);

                    if (response === "OK"){
                        Alert.success('OK' + response);
                    } else {
                        Alert.error('W Egerii w CKK > Kontrahenci brak wprowadzonych klientów dla nip: ' + response, {
                            timeout: 60000
                        });
                    }


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

                response.contacts = response;

                dispatch(response);getContactsIn

                if (response) {
                    Alert.error('OK');
                } else {
                    Alert.error('Bad login or pass');
                }



                return response;

            }).catch(error => {
                debugger;
                throw(error);
            });
        };
    }

    export function actUploadDataInvoicesFromSoftraToEgeria(data) {
        return function (dispatch) {
            return egeriaApi.uploadDataInvoiceMotozegToEgeria(data).then(response => {

                if (response) {

                    //Return check
                    console.log(response);

                    if (response === "OK"){
                        Alert.success('OK' + response);
                    } else {
                        Alert.error('W Egerii w CKK > Kontrahenci brak wprowadzonych klientów dla nip: ' + response, {
                            timeout: 60000
                        });
                    }


                } else {
                    Alert.error('Bad login or pass');
                }

            }).catch(error => {
                debugger;
                throw(error);
            });
        };
    }


export const getAllContacts = state => state.allContacts;

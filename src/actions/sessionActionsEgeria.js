import egeriaApi from '../api/EgeriaApi';
import Alert from 'react-s-alert';


// Initial
const initialState = {
    task: undefined,
    myTasks: [],
    allContacts: [{"id":"12", "employee":"test1"},{"id":"123", "employee":"test2"}],
}

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


export const getAllContacts = state => state.allContacts;

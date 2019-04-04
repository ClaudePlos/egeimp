import * as urlMain from './urlMain';

class EgeriaApi {

    static uploadDataInvoiceMotozegToEgeria(data) {
        console.log("EgeriaApi.uploadDataInvoiceMotozegToEgeria:");
        console.log(data);
        const request = new Request(urlMain.API_BASE_URL + `/N1-Controlling-web/resources/egeria/ctl/api/wgrajFaktureMotozeg`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'token': window.sessionStorage.getItem("jwt")
            }),
            body: JSON.stringify(data) //
        });


        return fetch(request).then(response => {
            console.log(response);
            return response.text();
        }).catch(error => {
            return error;
        });
    }

    static getContactInApi() {
        const request = new Request(urlMain.API_BASE_URL + `/N1-Controlling-web/resources/egeria/ctl/api/contact_in`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'token': window.sessionStorage.getItem("jwt")
            }),
            body: JSON.stringify()
        });


        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static uploadDataInvoicesFromSoftraToEgeria(data) {
        console.log("EgeriaApi.uploadDataInvoicesFromSoftraToEgeria:");
        console.log(data);
        const request = new Request(urlMain.API_BASE_URL + `/N1-Controlling-web/resources/egeria/ctl/api/uploadInvoicesFromSoftraToEgeria`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'token': window.sessionStorage.getItem("jwt")
            }),
            body: JSON.stringify(data) //
        });


        return fetch(request).then(response => {
            console.log(response);
            return response.text();
        }).catch(error => {
            return error;
        });
    }

}



export default EgeriaApi;
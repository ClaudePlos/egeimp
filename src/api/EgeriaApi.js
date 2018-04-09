var apiBaseUrl = "http://192.168.0.15:8080";

class EgeriaApi {

    static uploadDataInvoiceMotozegToEgeria(data) {

        const request = new Request(apiBaseUrl + `/N1-Controlling-web/resources/egeria/ctl/api/test`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'token': window.sessionStorage.getItem("jwt")
            }),
            body: JSON.stringify(data)
        });


        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getContactInApi() {
        const request = new Request(apiBaseUrl + `/N1-Controlling-web/resources/egeria/ctl/api/contact_in`, {
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

}

export default EgeriaApi;
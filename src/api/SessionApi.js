//var apiBaseUrl = "http://192.168.0.15:8080";
var apiBaseUrl = "https://i2.naprzod.pl";

class SessionApi {
    static login(credentials) {
        //debugger
        const request = new Request(apiBaseUrl + `/N1-Controlling-web/resources/login`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(credentials)
        });


        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default SessionApi;
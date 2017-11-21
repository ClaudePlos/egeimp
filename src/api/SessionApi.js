class SessionApi {
    static login(credentials) {
        //debugger;
        var apiBaseUrl = "https://i2.naprzod.pl";
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
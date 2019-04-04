import * as urlMain from './urlMain';

class SessionApi {
    static login(credentials) {
        //debugger
        const request = new Request( urlMain.API_BASE_URL + `/N1-Controlling-web/resources/login`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(credentials)
        });


        return fetch(request).then(response => {
            console.log(response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default SessionApi;
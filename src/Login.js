import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import UploadScreen from "./UploadScreen";

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    render() {
        return (
            <div>
            <MuiThemeProvider>
            <div>
            <AppBar
        title="Login"
            />
            <TextField
        hintText="Enter your Username"
        floatingLabelText="Username"
        onChange={(event,newValue) => this.setState({username:newValue})}
        />
        <br/>
        <TextField
        type="password"
        hintText="Enter your Password"
        floatingLabelText="Password"
        onChange={(event,newValue) => this.setState({password:newValue})}
        />
        <br/>
        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
        </div>
        </MuiThemeProvider>
        </div>
    );
    }

    handleClick(event){
        var apiBaseUrl = "https://i2.naprzod.pl";
        var self = this;
        var payload={
            "uzNazwa":this.state.username,
            "uzHaslo":this.state.password
        }
        axios.post(apiBaseUrl+'/N1-Controlling-web/resources/login', payload)
            .then(function (response) {
                console.log(response);
                if(response.status === 200){
                    console.log("Login successfull");
                    var uploadScreen=[];
                    uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
                    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
                }
                else if(response.status === 204){
                    console.log("Username password do not match");
                    alert("username password do not match")
                }
                else{
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }



}
const style = {
    margin: 15,
};
export default Login;


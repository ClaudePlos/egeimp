import React from 'react';
import TextInput from './common/TextInput';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/sessionActions';
import styles from './LogInPage.css';
import logo from './img/logo300px.jpg';

class LogInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {credentials: {uzNazwa: '', uzHaslo: ''}}
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange(event) {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({credentials: credentials});
    }

    onSave(event) {
        event.preventDefault();
        this.props.actions.loginUser(this.state.credentials);
    }

    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <img src={logo} /><br></br>
                    <form className="register-form">
                        <TextInput
                            name="uzNazwa"
                            label="login"
                            value={this.state.credentials.uzNazwa}
                            onChange={this.onChange}/>

                        <TextInput
                            name="uzHaslo"
                            label="password"
                            type="password"
                            value={this.state.credentials.uzHaslo}
                            onChange={this.onChange}/>

                        <input
                            type="submit"
                            value="LogIn"
                            className="btn btn-primary"
                            onClick={this.onSave}/>
                        {" "}

                    </form>
                </div>
                <center>
                {/*<img  src="https://user-images.githubusercontent.com/6311412/32380989-dddaff0a-c0b1-11e7-8277-9868a4d2c901.png" />*/}
                </center>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
}
export default connect(null, mapDispatchToProps)(LogInPage);

import React from 'react';
import Header from '../common/Header';
import PropTypes from 'prop-types';
import * as sessionActionsEge  from '../../actions/sessionActionsEgeria';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

class ContactIn extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            status:false
        }

        this.onGet = this.onGet.bind(this);

        console.log('Get ContactIn 1.');
        //this.onGet();
        //self.getContactsInFromEgeria();
    }

    onGet(event) {
        event.preventDefault();
        this.props.actions.getContactsIn();
    }

    render() {
        return (
            <div>
                <Header/>
                <div>
                    <h1>Lista kontaktów</h1>
                    <p>coming soon!</p>
                    <button onClick={this.onGet}>getContact</button>
                </div>
            </div>
        );
    }


}

ContactIn.propTypes = {
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {logged_in: state.session};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActionsEge, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactIn);
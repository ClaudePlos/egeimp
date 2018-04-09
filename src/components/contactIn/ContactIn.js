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
            status:false,
            dataSet: []
        }

        this.onGet = this.onGet.bind(this);

        console.log('Get ContactIn 1.');

        this.props.actions.getContactsIn();

        this.setState({dataSet: null })

    }

    onGet(event) {
        event.preventDefault();
        console.log("!!!!!!!!!!!!!!");
        console.log(this.state.dataSet);
    }

    render() {

        const data = [{"name":"test1"},{"name":"test2"}];
        //const data = this.props;

        return (
            <div>
                <Header/>
                <div>
                    <h1>Lista kontaktów</h1>
                    <p>coming soon!</p>
                    <button onClick={this.onGet}>getContact</button>
                </div>


                <div>
                    {data.map(function(d, idx){
                        return (<li key={idx}>{d.employee}</li>)
                    })}
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
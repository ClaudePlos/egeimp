import React, {Component} from 'react';
import Header from '../common/Header';
import { shape, arrayOf, PropTypes } from 'prop-types';
import * as sessionActionsEge  from '../../actions/sessionActionsEgeria';
import {getAllContacts} from '../../actions/sessionActionsEgeria';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

class ContactIn extends Component {



    constructor(props){
        super(props);
        this.state ={
            status:false,
            contacts: [{"id":"12", "employee":"test1"},{"id":"123", "employee":"test2"}]
        }

        this.onGet = this.onGet.bind(this);

        console.log('Get ContactIn 1.');
    }

    componentWillMount() {
        console.log('ManagerTasksView will mount')
        this.props.actions.getContactsIn()
        //this.setState({contacts: this.props.contacts })
    }

    onGet(event) {
        event.preventDefault();
        console.log("!!!!!!!!!!!!!!");
        this.props.actions.getContactsIn();
        console.log(this.props.contacts);
        console.log("!!!!!!!!!!!!!!State");
        console.log(this.state);
    }



    createListItems(){
        return this.state.contacts.map(( con ) => {
            return (
                <li key={con.id}> {con.employee} </li>
            );
        })
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

                {/*{this.props.contacts}*/}


                <div>

                    <ul>
                        {
                            this.props.contacts &&
                            this.props.contacts.map((post) =>{
                                return(
                                    <li>{post.employee}</li>
                                )
                            })
                        }
                    </ul>

                    {/*<ul>*/}
                        {/*{this.createListItems()}*/}
                    {/*</ul>*/}


                    {/*{data.map(function(d, idx){*/}
                        {/*return (<li key={idx}>{d.employee}</li>)*/}
                    {/*})}*/}
                </div>

            </div>
        );
    }


}



ContactIn.propTypes = {
    contacts: arrayOf(shape()).isRequired,
    actions: PropTypes.object.isRequired
}

ContactIn.defaultProps = {
    contacts: []
}

function mapStateToProps(state, ownProps) {
    console.log("xxxxxxxxxxxxxxxx");
    console.log(state);
    return {
        logged_in: state.session,
        contacts:  state.contacts //[{"id":"12", "employee":"test1"},{"id":"123", "employee":"test2"}]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActionsEge, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactIn);
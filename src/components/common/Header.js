import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../../actions/sessionActions';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    DropdownToggle,
    UncontrolledDropdown, DropdownMenu, DropdownItem
} from 'reactstrap';
import './Header.css';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: true
        };

    }

    logOut(event) {
        event.preventDefault();
        this.props.actions.logOutUser();
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        if (this.props.logged_in) {
            return (
                <div>
                    <Navbar color="inverse" inverse toggleable>
                        <NavbarToggler className="navbar-toggle" left onClick={this.toggle} />
                        <a href="/" onClick={this.logOut}>out</a>

                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Egeria
                                    </DropdownToggle>
                                    <DropdownMenu >
                                        <DropdownItem tag={Link} to="/egeriaimport">import Diag. </DropdownItem>
                                        <DropdownItem tag={Link} to="/egeriaimport">import Paliwo </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                                <NavItem>
                                    <NavLink href="/homepage/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/contact_in/">Kontakty</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/ClaudePlos">Github</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            );
        } else {
            return (
                <nav>
                </nav>
            );
        }
    }
}

Header.propTypes = {
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {logged_in: state.session};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);
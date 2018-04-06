import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../../actions/sessionActions';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button,
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
                        {/*<NavbarBrand href="/">out</NavbarBrand>*/}

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


/*









<div id="Content">
                    <Navbar color="faded" light expand="md">

                        <NavbarBrand href="/">logout</NavbarBrand>

                        <NavbarToggler onClick={this.toggle}/>


                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/ClaudePlos">Github</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                                    </DropdownToggle>
                                    <DropdownMenu >
                                        <DropdownItem>
                                            Option 1
                                        </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>

                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Egeria
                                    </DropdownToggle>
                                    <DropdownMenu >
                                        <DropdownItem>
                                            <NavLink href="/egeriaimport">Egeria Import</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>

                    </Navbar>
                </div>




<nav>
                    <IndexLink to="/homepage" activeClassName="active">Home</IndexLink>
                    {" | "}
                    <Link to="/egeriaimport" activeClassName="active">Egeria Import</Link>
                    {" | "}
                    <Link to="/about" activeClassName="active">About</Link>
                    {" | "}
                    <a href="/logout" onClick={this.logOut}>log out</a>
                </nav>


 */
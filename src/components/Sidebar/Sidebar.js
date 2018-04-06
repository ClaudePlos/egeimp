import React, {Component} from 'react';
import {Badge, Nav, NavItem, NavLink} from 'reactstrap';
import classNames from 'classnames';
import nav from './_nav'

class Sidebar extends Component {



  render() {
    // sidebar-nav root
      return (
          <div className="sidebar">
            <nav className="sidebar-nav">
              <Nav>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
              </Nav>
            </nav>
          </div>
      )
  }
}

export default Sidebar;
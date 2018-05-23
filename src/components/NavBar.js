import React, { Component } from 'react';
import { Nav } from "react-bootstrap";
import { NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


class NavBar extends Component {
    // handleSelect(eventKey) {
    //   event.preventDefault();
    //   alert(`selected ${eventKey}`);
    // }
  
    render() {
      return (
        <Nav justified bsStyle="tabs"  /* onSelect={k => this.handleSelect(k)} */>
          <LinkContainer to="/">
            <NavItem eventKey="1">
              Coppa Italia
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/champions">
            <NavItem eventKey="2">
              Champions League
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/europe">
            <NavItem eventKey="3" >
              Europe League
            </NavItem>
          </LinkContainer>
        </Nav>
      );
    }
  }
  
  export default NavBar;
import React, { Component } from 'react';
import { Nav, NavItem } from "react-bootstrap";

export default class MenuLaterale extends Component {
    render() {
        return (
            <Nav bsStyle="pills" stacked activeKey={1} >
                <NavItem />
                <NavItem />
                <NavItem eventKey={1} href="/home">
                    Calendario
                </NavItem>
                <NavItem eventKey={2} >
                    Classifica
                </NavItem>
            </Nav>
        )
    }
}

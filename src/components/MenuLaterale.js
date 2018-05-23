import React, { Component } from 'react';
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";


class MenuLaterale extends Component {
    render() {
        const { param } = this.props;
        let paramURL = "/classifica" + (param ? ("-" + param) : "");
        return (
            <Nav bsStyle="pills" stacked >
                <NavItem />
                <NavItem />
                <LinkContainer to={paramURL}>
                    <NavItem eventKey={2} >
                        Classifica
                    </NavItem>
                </LinkContainer>
            </Nav>
        )
    }
}

function mapStateToProps(state){
    return {
        param: state.param
    }
}

export default connect(mapStateToProps)(MenuLaterale);
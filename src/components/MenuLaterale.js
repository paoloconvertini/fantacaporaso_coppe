import React, { Component } from 'react';
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchClassEurope } from "../actions"


class MenuLaterale extends Component {

    onClick = e => {
        this.props.onClick();
    }

    render() {
        const { param } = this.props;
        let paramURL = "/classifica" + (param ? ("-" + param) : "");
        return (
            <Nav bsStyle="pills" activeKey={1} stacked >
                <NavItem />
                <NavItem />
                <LinkContainer to={paramURL}>
                    <NavItem eventKey={1} onClick={this.onClick}>
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({onClick: fetchClassEurope}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuLaterale);
import React, { Component } from 'react';
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { fetchClassEurope, fetchClassChampions, fetchClassItalia } from "../actions"


class MenuLaterale extends Component {

    onClick(param) {
        console.log(param);
        if(param === "") {
            this.props.fetchClassItalia();
        } else if(param === "europe") {
            this.props.fetchClassEurope();
        } else {
            this.props.fetchClassChampions();
        }
        
    }

    render() {
        const { param } = this.props;
        let paramURL = "/classifica" + (param ? ("-" + param) : "");
        return (
            <Nav bsStyle="pills" activeKey={1} stacked >
                <NavItem />
                <NavItem />
                <LinkContainer to={paramURL}>
                    <NavItem eventKey={1} onClick={e => {this.onClick(param)}}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchClassItalia: () => {
            dispatch(fetchClassItalia())
        },
        fetchClassChampions: () => {
            dispatch(fetchClassChampions())
        },
        fetchClassEurope: () => {
            dispatch(fetchClassEurope())
        }
    }
    
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuLaterale);
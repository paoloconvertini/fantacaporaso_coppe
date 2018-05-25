import React, { Component } from 'react';
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { setUrlParam, fetchClassEurope, fetchClassChampions, fetchClassItalia, fetchCalendItalia, fetchCalendChampions, fetchCalendEurope } from '../actions';



class NavBar extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
  }
    
    handleSelect(selectedKey) {
      let param = "";
      switch (selectedKey) {
        case "1":
          param = "";
          this.props.fetchClassItalia();
          this.props.fetchCalendItalia();
          break;
        case "2":
          param = "champions";
          this.props.fetchClassChampions();
          this.props.fetchCalendChampions();
          break;
        case "3":
          param = "europe";
          this.props.fetchClassEurope();
          this.props.fetchCalendEurope();
          break;
        default:
          break;
       }
      this.props.setUrlParam(param);
    }
    
  
    render() {
      return (
        <Nav justified bsStyle="tabs" onSelect={this.handleSelect}>
          <LinkContainer to="/">
            <NavItem eventKey="1" >
              Coppa Italia
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/champions">
            <NavItem eventKey="2" >
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

function mapStateToProps(state){
  return {
    param: state.param
  }
}
  
const mapDispatchToProps = (dispatch, param) => {
  return {
      setUrlParam: param => {
        dispatch(setUrlParam(param))
      },
      fetchClassItalia: () => {
        dispatch(fetchClassItalia())
      },
      fetchClassChampions: () => {
        dispatch(fetchClassChampions())
      },
      fetchClassEurope: () => {
        dispatch(fetchClassEurope())
      },
      fetchCalendItalia: () => {
        dispatch(fetchCalendItalia())
      },
      fetchCalendChampions: () => {
        dispatch(fetchCalendChampions())
      },
      fetchCalendEurope: () => {
        dispatch(fetchCalendEurope())
      }
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
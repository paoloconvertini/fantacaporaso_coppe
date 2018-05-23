import React, { Component } from 'react';
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setUrlParam } from '../actions';



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
          break;
        case "2":
          param = "champions";
          break;
        case "3":
          param = "europe";
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

  
function mapDispatchToProps(dispatch) {
  return bindActionCreators({setUrlParam: setUrlParam}, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchTeamsAction } from "./actions/index";
import Router from "./routes/Router"


class App extends Component {
  
  componentDidMount = () => {
    this.props.dispatch(fetchTeamsAction());
  }

  render() {
    return (
      <Router />
    );
  }
}

export default connect()(App);

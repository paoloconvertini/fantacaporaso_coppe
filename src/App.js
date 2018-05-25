import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchClassItalia, fetchCalendItalia } from "./actions/index";
import Router from "./routes/Router"


class App extends Component {
  
  componentDidMount = () => {
    this.props.dispatch(fetchClassItalia());
    this.props.dispatch(fetchCalendItalia());
  }

  render() {
    return (
      <Router />
    );
  }
}

export default connect()(App);

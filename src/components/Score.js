import React, { Component } from 'react';
import { connect } from "react-redux";


class Score extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
};


function mapStateToProps(state) {
    return {
        teams: state.teams
    }
}

export default connect(mapStateToProps)(Score);



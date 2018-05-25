import React, { Component } from 'react';
import { connect } from "react-redux";

class Score extends Component {
  render() {
    return (
      <div className="score">
        {this.props.score}
      </div>
    )
  }
};


function mapStateToProps(store) {
    return {
        scoreStore: store.score
    }
  }

export default connect(mapStateToProps)(Score);



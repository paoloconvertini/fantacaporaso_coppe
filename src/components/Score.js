import React, { Component } from 'react';
import { connect } from "react-redux";

class Score extends Component {
  render() {
    return (
      <div>
        {this.props.score}
      </div>
    )
  }
};


function mapStateToProps(store) {
    return {
        score: store.score
    }
  }

export default connect(mapStateToProps)(Score);



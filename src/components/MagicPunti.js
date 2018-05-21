import React, { Component } from 'react'
import { connect } from "react-redux";

class MagicPunti extends Component {
  render() {
    return (
      <div>
        <input 
          type="text"
          onChange={this.onChange}
          />
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
      teams: state.teams
  }
}

export default connect(mapStateToProps)(MagicPunti);

import React, { Component } from 'react'
import { connect } from "react-redux";
import { calculateScore } from '../actions';
import { bindActionCreators } from "redux";

class MagicPunti extends Component {
  
  onChange = e => {
    this.props.calculateScore(e.target.value);
};

  render() {
    return (
        <input 
        className="inputMagic"
          type="text"
          onChange={this.onChange}
          />
    )
  }
};

function mapStateToProps(state) {
  return {
      magicPunti: state.magicPunti
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({calculateScore: calculateScore}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MagicPunti);

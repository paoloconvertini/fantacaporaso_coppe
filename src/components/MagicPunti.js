import React, { Component } from 'react'
import { connect } from "react-redux";
import { calculateScore } from '../actions';
import { bindActionCreators } from "redux";

class MagicPunti extends Component {
  
  onChange = e => {
    this.props.calculateScore(e.target.value);
};

  render() {
    if(this.props.magic) {
      return (
        <span>
          {this.props.magic}
        </span>
      )
    } else {
      return (
          <input 
            className="inputMagic"
            type="text"
            onChange={this.onChange}
            />
      )
    }
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({calculateScore: calculateScore}, dispatch);
}

export default connect(null, mapDispatchToProps)(MagicPunti);

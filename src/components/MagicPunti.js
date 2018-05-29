import React, { Component } from 'react'
import { connect } from "react-redux";
import { addMagic } from '../actions';
import { bindActionCreators } from "redux";
import Selectors from '../selectors';


class MagicPunti extends Component {

  onChange = e => {
    this.props.addMagic(e.target.value);
  };

  render() {
    const { calGironeA, calGironeB, index, giornata, girone } = this.props;

    if (!((calGironeA && calGironeA[giornata].magic[index]) || (calGironeB && calGironeB[giornata].magic[index]))) {
      return (
        <input
          className="inputMagic"
          type="text"
          onChange={this.onChange}
        />
      )
    } else {
      if (girone === "A") {
        return (
          <span>
            {calGironeA && calGironeA[giornata].magic[index]}
          </span>
        )
      } else {
        return (
          <span>
            {calGironeB && calGironeB[giornata].magic[index]}
          </span>
        )
      }
    }
  }
};


function mapStateToProps(state) {
  if (state.param === "") {
    return {
      calGironeA: Selectors.getCalCoppaItaliaGironeA(state),
      calGironeB: Selectors.getCalCoppaItaliaGironeB(state)
    }
  } else if (state.param === "champions") {
    return {
      calGironeA: Selectors.getCalChampionsGironeA(state),
      calGironeB: Selectors.getCalChampionsGironeB(state)
    }
  } else {
    return {
      calGironeA: Selectors.getCalEuropeGironeA(state),
      calGironeB: Selectors.getCalEuropeGironeB(state)
    }
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMagic: addMagic }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MagicPunti);

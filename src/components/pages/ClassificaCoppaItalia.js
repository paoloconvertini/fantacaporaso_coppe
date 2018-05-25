import React, { Component } from 'react';
import ClassificaRow from "../containers/ClassificaRow";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setClassGirone } from "../../actions"

class ClassificaCoppaItalia extends Component {

  onClick = (param) => {
    setClassGirone(param);
  }

  render() {
    return (
      <div>
        <Button bsStyle="info" onClick={() => this.onClick("A")}>Girone A</Button>{"   "}
        <Button bsStyle="info" onClick={() => this.onClick("B")}>Girone B</Button>
        <table>
          <thead>
            <tr>
              <th>Squadra</th>
              <th>Punti</th>
              <th>Magic</th>
              <th>Vittorie</th>
              <th>Nulle</th>
              <th>Perse</th>
              <th>GF</th>
              <th>GS</th>
              <th>DR</th>
              <th>Giocate</th>
            </tr>
          </thead>
          <ClassificaRow girone={this.props.classGirone} />
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    classGirone: state.classGirone
  }
}

const mapDispatchToProps = (dispatch, param) => {
  return {
    setClassGirone: param => {
      dispatch(setClassGirone(param))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassificaCoppaItalia)
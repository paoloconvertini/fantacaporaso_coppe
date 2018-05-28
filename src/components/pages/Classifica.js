import React, { Component } from 'react';
import ClassificaRow from "../containers/ClassificaRow";
import { ButtonToolbar, ToggleButtonGroup, ToggleButton, Label } from "react-bootstrap";

export default class ClassificaCoppaItalia extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: "A"
    }
  }

  handleChange = (e) => {
    this.setState({ value: e });
  }

  render() {
    return (
      <div>
        <Label>{this.props.label}</Label>
        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="options" value={this.state.value} onChange={this.handleChange}>
            <ToggleButton value={"A"}>Girone A</ToggleButton>
            <ToggleButton value={"B"}>Girone B</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
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
          <ClassificaRow girone={this.state.value} />
        </table>
      </div>
    )
  }
}
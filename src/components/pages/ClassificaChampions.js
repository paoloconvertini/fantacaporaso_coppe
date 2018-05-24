import React, { Component } from 'react'
import ClassificaRow from "../containers/ClassificaRow";
import { Label } from "react-bootstrap";

export default class ClassificaChampions extends Component {
  render() {
    return (
      <div>
      <Label bsStyle="info">Girone A</Label>
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
          <ClassificaRow />
      </table>
    </div>
    )
  }
}
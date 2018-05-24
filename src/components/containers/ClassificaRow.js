import React, { Component } from 'react';
import { connect } from "react-redux";
import Selectors from '../../selectors';

class ClassificaRow extends Component {
  render() {
      const { dati } = this.props;      
    return (
        <tbody>
            {dati.map( (row) => 
              <tr key={row.id}>
                <td>{row.squadra}</td>
                <td>{row.punti}</td>
                <td>{row.magic}</td>
                <td>{row.partite}</td>
                <td>{row.vittorie}</td>
                <td>{row.nulle}</td>
                <td>{row.perse}</td>
                <td>{row.GF}</td>
                <td>{row.GS}</td>
                <td>{row.partite}</td>
              </tr>   
            )}
        </tbody>        

    )
  }
}

function mapStateToProps(state){
    return {
        dati: Selectors.getDati(state),
    }
}

export default connect(mapStateToProps)(ClassificaRow);

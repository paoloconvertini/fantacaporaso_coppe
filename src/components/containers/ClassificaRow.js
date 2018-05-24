import React, { Component } from 'react';
import { connect } from "react-redux";
import Selectors from '../../selectors';

class ClassificaRow extends Component {
  render() {
    return (
        <tbody>
            {this.props.dati.map( (row) => 
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
    if(state.param === "") {
        return {
            dati: Selectors.getCoppaItaliaDati(state),
        }
    } else if(state.param === "champions") {
        return {
            dati: Selectors.getChampionsDati(state),
        }
    } else {
        return {
            dati: Selectors.getEuropeDati(state),
        }
    }
}

export default connect(mapStateToProps)(ClassificaRow);

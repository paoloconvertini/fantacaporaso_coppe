import React, { Component } from 'react';
import { connect } from "react-redux";
import Selectors from '../../selectors';

class ClassificaRow extends Component {

    render() {

        const { girone, gironeA, gironeB } = this.props;

        if (girone === "A") {
            return (
                <tbody>
                    {gironeA && gironeA.map((row) =>
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
        } else {
            return (
                <tbody>
                    {gironeB && gironeB.map((row) =>
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
                </tbody>)
        }
    }
}

function mapStateToProps(state) {
    if (state.param === "") {
        return {
            gironeA: Selectors.getCoppaItaliaGironeA(state),
            gironeB: Selectors.getCoppaItaliaGironeB(state)
        }
    } else if (state.param === "champions") {
        return {
            gironeA: Selectors.getChampionsGironeA(state),
            gironeB: Selectors.getChampionsGironeB(state)
        }
    } else {
        return {
            gironeA: Selectors.getEuropeGironeA(state),
            gironeB: Selectors.getEuropeGironeB(state)
        }
    }
}

export default connect(mapStateToProps)(ClassificaRow);

import React, { Component } from 'react';
import Team from '../Team';
import Score from '../Score';
import MagicPunti from '../MagicPunti';
import { connect } from "react-redux";
import Selectors from '../../selectors';
import { Media } from "react-bootstrap";


class GironeRow extends Component {

    render() {

        const { girone, gironeA, calGironeA, gironeB, calGironeB, giornata, squadre } = this.props;
        if (girone === "A") {
            return (
                <Media.Body>
                    <table>
                        <tbody>
                            <tr>
                                {<td>
                                    <Team squadra={gironeA && gironeA[squadre[0]].squadra} />{' '}
                                    <MagicPunti magic={calGironeA && calGironeA[giornata].magic[0]} />{' '}-{' '}
                                    <MagicPunti magic={calGironeA && calGironeA[giornata].magic[1]} />{' '}
                                    <Team squadra={gironeA && gironeA[squadre[1]].squadra} />{' '}
                                    <Score score={calGironeA && calGironeA[giornata].risultati[0]} />{' '}-{' '}
                                    <Score score={calGironeA && calGironeA[giornata].risultati[1]} />
                                </td>}
                            </tr>
                            <tr>
                                {<td>
                                    <Team squadra={gironeA && gironeA[squadre[2]].squadra} />{' '}
                                    <MagicPunti magic={calGironeA && calGironeA[giornata].magic[2]} />{' '}-{' '}
                                    <MagicPunti magic={calGironeA && calGironeA[giornata].magic[3]} />{' '}
                                    <Team squadra={gironeA && gironeA[squadre[3]].squadra} />{' '}
                                    <Score score={calGironeA && calGironeA[giornata].risultati[2]} />{' '}-{' '}
                                    <Score score={calGironeA && calGironeA[giornata].risultati[3]} />
                                </td>}
                            </tr>
                        </tbody>
                    </table>
                </Media.Body>
            )
        } else {
            return (
                <Media.Body>
                    <table>
                        <tbody>
                            <tr>
                                {<td>
                                    <Team squadra={gironeB && gironeB[squadre[0]].squadra} />{' '}
                                    <MagicPunti magic={calGironeB && calGironeB[giornata].magic[0]} />{' '}-{' '}
                                    <MagicPunti magic={calGironeB && calGironeB[giornata].magic[1]} />{' '}
                                    <Team squadra={gironeB && gironeB[squadre[1]].squadra} />{' '}
                                    <Score score={calGironeB && calGironeB[giornata].risultati[0]} />{' '}-{' '}
                                    <Score score={calGironeB && calGironeB[giornata].risultati[1]} />
                                </td>}
                            </tr>
                            <tr>
                                {<td>
                                    <Team squadra={gironeB && gironeB[squadre[2]].squadra} />{' '}
                                    <MagicPunti magic={calGironeB && calGironeB[giornata].magic[2]} />{' '}-{' '}
                                    <MagicPunti magic={calGironeB && calGironeB[giornata].magic[3]} />{' '}
                                    <Team squadra={gironeB && gironeB[squadre[3]].squadra} />{' '}
                                    <Score score={calGironeB && calGironeB[giornata].risultati[2]} />{' '}-{' '}
                                    <Score score={calGironeB && calGironeB[giornata].risultati[3]} />
                                </td>}
                            </tr>
                        </tbody>
                    </table>
                </Media.Body>
            )
        }
    }
};


function mapStateToProps(state) {
    if (state.param === "") {
        return {
            gironeA: Selectors.getCoppaItaliaGironeA(state),
            gironeB: Selectors.getCoppaItaliaGironeB(state),
            calGironeA: Selectors.getCalCoppaItaliaGironeA(state),
            calGironeB: Selectors.getCalCoppaItaliaGironeB(state)
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
};

export default connect(mapStateToProps)(GironeRow);

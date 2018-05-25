import React, { Component } from 'react';
import Team from '../Team';
import Score from '../Score';
import MagicPunti from '../MagicPunti';
import { connect } from "react-redux";
import Selectors from '../../selectors';
import { Media } from "react-bootstrap";


class GironeRow extends Component {

    render() {

        const { girone, gironeA, calGironeA, gironeB, calGironeB } = this.props;
        if (girone === "A") {
            return (
                <Media.Body>
                    <table>
                        <tbody>
                            <tr>
                                {<td>
                                    <Team squadra={gironeA && gironeA[0].squadra} />{' '}
                                    <MagicPunti magic={calGironeA && calGironeA[0].magic[0]} />{' '}-{' '}
                                    <MagicPunti magic={calGironeA && calGironeA[0].magic[1]} />{' '}
                                    <Team squadra={gironeA && gironeA[1].squadra} />{' '}
                                    <Score score={calGironeA && calGironeA[0].risultati[0]} />{' '}-{' '}
                                    <Score score={calGironeA && calGironeA[0].risultati[1]} />
                                </td>}
                            </tr>
                            <tr>
                                {<td>
                                    <Team squadra={gironeA && gironeA[2].squadra} />{' '}
                                    <MagicPunti magic={calGironeA && calGironeA[0].magic[2]} />{' '}-{' '}
                                    <MagicPunti magic={calGironeA && calGironeA[0].magic[3]} />{' '}
                                    <Team squadra={gironeA && gironeA[3].squadra} />{' '}
                                    <Score score={calGironeA && calGironeA[0].risultati[2]} />{' '}-{' '}
                                    <Score score={calGironeA && calGironeA[0].risultati[3]} />
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
                                    <Team squadra={gironeB && gironeB[0].squadra} />{' '}
                                    <MagicPunti magic={calGironeB && calGironeB[0].magic[0]} />{' '}-{' '}
                                    <MagicPunti magic={calGironeB && calGironeB[0].magic[1]} />{' '}
                                    <Team squadra={gironeB && gironeB[1].squadra} />{' '}
                                    <Score score={calGironeB && calGironeB[0].risultati[0]} />{' '}-{' '}
                                    <Score score={calGironeB && calGironeB[0].risultati[1]} />
                                </td>}
                            </tr>
                            <tr>
                                {<td>
                                    <Team squadra={gironeB && gironeB[2].squadra} />{' '}
                                    <MagicPunti magic={calGironeB && calGironeB[0].magic[2]} />{' '}-{' '}
                                    <MagicPunti magic={calGironeB && calGironeB[0].magic[3]} />{' '}
                                    <Team squadra={gironeB && gironeB[3].squadra} />{' '}
                                    <Score score={calGironeB && calGironeB[0].risultati[2]} />{' '}-{' '}
                                    <Score score={calGironeB && calGironeB[0].risultati[3]} />
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

import React, { Component } from 'react';
import Team from '../Team';
import Score from '../Score';
import MagicPunti from '../MagicPunti';
import { connect } from "react-redux";
import Selectors from '../../selectors';



class GironeRow extends Component {

    render() {
    if(this.props.girone === "A") {
        return (
            <tbody>
                <tr>
                    {<td><Team squadra={this.props.gironeA && this.props.gironeA[0].squadra}/>{' '}<MagicPunti /> - <MagicPunti />{' '}<Team squadra={this.props.gironeA && this.props.gironeA[1].squadra}/>{' '}<Score /> - <Score /></td>}
                </tr>
                <tr>
                    {<td><Team squadra={this.props.gironeA && this.props.gironeA[2].squadra}/>{' '}<MagicPunti /> - <MagicPunti />{' '}<Team squadra={this.props.gironeA && this.props.gironeA[3].squadra}/>{' '}<MagicPunti /> - <MagicPunti />{' '}<Team />{' '}<Score /> - <Score /></td>}
                </tr>
            </tbody>
        )
    } else {
        return (
            <tbody>
                <tr>
                    {<td><Team squadra={ this.props.gironeB && this.props.gironeB[0].squadra}/>{' '}<MagicPunti /> - <MagicPunti />{' '}<Team squadra={ this.props.gironeB && this.props.gironeB[1].squadra}/>{' '}<Score /> - <Score /></td>}
                </tr>
                <tr>
                    {<td><Team squadra={ this.props.gironeB && this.props.gironeB[2].squadra}/>{' '}<MagicPunti /> - <MagicPunti />{' '}<Team squadra={ this.props.gironeB && this.props.gironeB[3].squadra}/>{' '}<Score /> - <Score /></td>}
                </tr>
            </tbody>

        )
    }
    }
};


function mapStateToProps(state) {
    if(state.param === "") {
        return {
            gironeA: Selectors.getCoppaItaliaGironeA(state),
            gironeB: Selectors.getCoppaItaliaGironeB(state),
        }
    } else if(state.param === "champions") {
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

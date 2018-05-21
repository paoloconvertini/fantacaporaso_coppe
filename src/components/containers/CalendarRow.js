import React, { Component } from 'react';
import Team from '../Team';
import Score from '../Score';
import MagicPunti from '../MagicPunti';
import { connect } from "react-redux";


class CalendarRow extends Component {
  render() {
      const { teams } = this.props;
    return (
        <td>
            <Team teamName={teams[0].name}/><MagicPunti /> - <MagicPunti /><Team teamName={teams[1].name}/><Score /> - <Score />
        </td>
    )
  }
};

function mapStateToProps(state) {
    return {
        teams: state.teams
    }
};

export default connect(mapStateToProps)(CalendarRow);

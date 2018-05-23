import React, { Component } from 'react';
import { connect } from "react-redux";

class Team extends Component {

    render() {
        const { teams } = this.props;
        return (
            <div className="team">
               {teams[0] && teams[0].squadra}
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        teams: state.teams
    }
}

export default connect(mapStateToProps)(Team);
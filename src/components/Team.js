import React, { Component } from 'react';
import { connect } from "react-redux";

class Team extends Component {

    render() {
        return (
            <div className="team">
               {this.props.teams[0] && this.props.teams[0].squadra}
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        teams: state
    }
}

export default connect(mapStateToProps)(Team);
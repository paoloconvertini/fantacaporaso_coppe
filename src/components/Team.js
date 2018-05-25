import React, { Component } from 'react';

class Team extends Component {

    render() {
        return (
            <div className="team">
               {this.props.squadra}
            </div>
        )
    }
};

export default Team;
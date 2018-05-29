import React, { Component } from 'react';
import { Button, Label } from 'react-bootstrap';
import CalendarContainer from "../containers/CalendarContainer";
import { connect } from "react-redux";
import { calculateScore } from '../../actions';
import { bindActionCreators } from "redux";


class CoppaItalia extends Component {

    onClick = e => {
        this.props.calculateScore(e.target.value);
    };

    render() {
        return (
            <div>
                <div><Label>{this.props.label}</Label></div>
                <Button bsStyle="primary" onClick={this.onClick}>Calcola giornata</Button>
                <CalendarContainer giornata={1}/>
                <CalendarContainer giornata={2}/>
                <CalendarContainer giornata={3}/>
                <CalendarContainer giornata={4}/>
                <CalendarContainer giornata={5}/>
                <CalendarContainer giornata={6}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({calculateScore: calculateScore}, dispatch);
  }

export default connect(null, mapDispatchToProps)(CoppaItalia)
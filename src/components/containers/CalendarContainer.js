import React, { Component } from 'react';
import CalendarRow from "./CalendarRow";
import { Label } from "react-bootstrap";


export default class CalendarContainer extends Component {
    

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th><Label bsStyle="info">Giornata {this.props.giornata}</Label></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <CalendarRow />
                        <CalendarRow />
                    </tr>
                </tbody>
            </table>
        )
    }
}

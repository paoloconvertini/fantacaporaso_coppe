import React, { Component } from 'react';
import CalendarRow from "./CalendarRow";


export default class CalendarContainer extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Giornata {this.props.giornata}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <CalendarRow />
                    </tr>
                </tbody>
            </table>
        )
    }
}

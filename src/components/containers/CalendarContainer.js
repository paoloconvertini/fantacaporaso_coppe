import React, { Component } from 'react';
import CalendarRow from "./CalendarRow";
import { Label, Media } from "react-bootstrap";

export default class CalendarContainer extends Component {

    render() {
        return (
            <Media>
                <Media.Left align="middle" bsClass="media-left">
                    Girone A
                </Media.Left>
                <Media.Body>
                    <table>
                        <thead>
                            <tr>
                                <th><Label bsStyle="info">Giornata {this.props.giornata}</Label></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <CalendarRow />
                            </tr>
                            <tr>
                                <CalendarRow />
                            </tr>
                        </tbody>
                    </table>
                </Media.Body>
            </Media>
        )
    }
}

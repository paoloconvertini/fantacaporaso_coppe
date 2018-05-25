import React, { Component } from 'react';
import GironeRow from "./GironeRow";
import { connect } from "react-redux";
import { Label, Media } from "react-bootstrap";

class CalendarContainer extends Component {
    render() {
        return (
            <div>
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
                            <GironeRow girone={"A"}/>
                        </table>
                    </Media.Body>
                </Media>
                <Media>
                    <Media.Left align="middle" bsClass="media-left">
                        Girone B
                    </Media.Left>
                    <Media.Body>
                        <table>
                            <GironeRow girone={"B"}/>
                    </table>
                </Media.Body>
            </Media>
            </div>
        )
    }
};


export default connect()(CalendarContainer);

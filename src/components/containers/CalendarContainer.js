import React, { Component } from 'react';
import Giornata1 from "./Giornata1";
import Giornata2 from "./Giornata2";
import Giornata3 from "./Giornata3";
import Giornata4 from "./Giornata4";
import Giornata5 from "./Giornata5";
import Giornata6 from "./Giornata6";
import GironeTipo from "./GironeTipo";
import { connect } from "react-redux";
import { Label, Media } from "react-bootstrap";

class CalendarContainer extends Component {
    render() {
        switch (this.props.giornata) {
            case 1:
                return (
                    <div>
                        <Media>
                            <Label bsStyle="info">Giornata {this.props.giornata}</Label>
                            <GironeTipo tipo={"A"} />
                            <Giornata1 girone={"A"} />
                        </Media>
                        <Media>
                            <GironeTipo tipo={"B"} />
                            <Giornata1 girone={"B"} />
                        </Media>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <Media>
                            <Label bsStyle="info">Giornata {this.props.giornata}</Label>
                            <GironeTipo tipo={"A"} />
                            <Giornata2 girone={"A"} />
                        </Media>
                        <Media>
                            <GironeTipo tipo={"B"} />
                            <Giornata2 girone={"B"} />
                        </Media>
                    </div>
                )
            case 3:
                return (
                    <div>
                        <Media>
                            <Label bsStyle="info">Giornata {this.props.giornata}</Label>
                            <GironeTipo tipo={"A"} />
                            <Giornata3 girone={"A"} />
                        </Media>
                        <Media>
                            <GironeTipo tipo={"B"} />
                            <Giornata3 girone={"B"} />
                        </Media>
                    </div>
                )
            case 4:
                return (
                    <div>
                        <Media>
                            <Label bsStyle="info">Giornata {this.props.giornata}</Label>
                            <GironeTipo tipo={"A"} />
                            <Giornata4 girone={"A"} />
                        </Media>
                        <Media>
                            <GironeTipo tipo={"B"} />
                            <Giornata4 girone={"B"} />
                        </Media>
                    </div>
                )
            case 5:
                return (
                    <div>
                        <Media>
                            <Label bsStyle="info">Giornata {this.props.giornata}</Label>
                            <GironeTipo tipo={"A"} />
                            <Giornata5 girone={"A"} />
                        </Media>
                        <Media>
                            <GironeTipo tipo={"B"} />
                            <Giornata5 girone={"B"} />
                        </Media>
                    </div>
                )
            case 6:
                return (
                    <div>
                        <Media>
                            <Label bsStyle="info">Giornata {this.props.giornata}</Label>
                            <GironeTipo tipo={"A"} />
                            <Giornata6 girone={"A"} />
                        </Media>
                        <Media>
                            <GironeTipo tipo={"B"} />
                            <Giornata6 girone={"B"} />
                        </Media>
                    </div>
                )
            default:
                return (<div></div>)
        }
    }
};


export default connect()(CalendarContainer);

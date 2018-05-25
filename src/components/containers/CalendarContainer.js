import React, { Component } from 'react';
import GiornataRow from "./GiornataRow";
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
                            <GiornataRow girone={"A"} giornata={0} squadre={[0,1,2,3]}/>
                        </Media>
                        <Media>
                            <GironeTipo tipo={"B"} />
                            <GiornataRow girone={"B"} giornata={0} squadre={[0,1,2,3]}/>
                        </Media>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <Media>
                            <Label bsStyle="info">Giornata {this.props.giornata}</Label>
                            <GironeTipo tipo={"A"} />
                            <GiornataRow girone={"A"} giornata={1} squadre={[0,2,1,3]}/>
                        </Media>
                        <Media>
                            <GironeTipo tipo={"B"} />
                            <GiornataRow girone={"B"} giornata={1} squadre={[0,2,1,3]}/>
                        </Media>
                    </div>
                )
            case 3:
                return (
                    <div>
                        <Media>
                            <Label bsStyle="info">Giornata {this.props.giornata}</Label>
                            <GironeTipo tipo={"A"} />
                            <GiornataRow girone={"A"} giornata={2} squadre={[0,3,2,1]}/>
                        </Media>
                        <Media>
                            <GironeTipo tipo={"B"} />
                            <GiornataRow girone={"B"} giornata={2} squadre={[0,3,2,1]}/>
                        </Media>
                    </div>
                )
            case 4:
                return (
                    <div>
                        <Media>
                            <Label bsStyle="info">Giornata {this.props.giornata}</Label>
                            <GironeTipo tipo={"A"} />
                            <GiornataRow girone={"A"} giornata={3} squadre={[1,0,3,2]}/>
                        </Media>
                        <Media>
                            <GironeTipo tipo={"B"} />
                            <GiornataRow girone={"B"} giornata={3} squadre={[1,0,3,2]}/>
                        </Media>
                    </div>
                )
            case 5:
                return (
                    <div>
                        <Media>
                            <Label bsStyle="info">Giornata {this.props.giornata}</Label>
                            <GironeTipo tipo={"A"} />
                            <GiornataRow girone={"A"} giornata={4} squadre={[2,0,3,1]}/>
                        </Media>
                        <Media>
                            <GironeTipo tipo={"B"} />
                            <GiornataRow girone={"B"} giornata={4} squadre={[2,0,3,1]}/>
                        </Media>
                    </div>
                )
            case 6:
                return (
                    <div>
                        <Media>
                            <Label bsStyle="info">Giornata {this.props.giornata}</Label>
                            <GironeTipo tipo={"A"} />
                            <GiornataRow girone={"A"} giornata={5} squadre={[3,0,1,2]}/>
                        </Media>
                        <Media>
                            <GironeTipo tipo={"B"} />
                            <GiornataRow girone={"B"} giornata={5} squadre={[3,0,1,2]}/>
                        </Media>
                    </div>
                )
            default:
                return (<div></div>)
        }
    }
};


export default connect()(CalendarContainer);

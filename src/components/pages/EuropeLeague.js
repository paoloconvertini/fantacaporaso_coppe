import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import CalendarContainer from "../containers/CalendarContainer";
import { Label } from "react-bootstrap";

export default class EuropeLeague extends Component {
    render() {
        return (
            <div>
                <div><Label>Europe League</Label></div>
                <Button bsStyle="primary" >Calcola giornata</Button>
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

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import CalendarContainer from "../containers/CalendarContainer";



export default class CoppaItalia extends Component {
    render() {
        return (
            <div>
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

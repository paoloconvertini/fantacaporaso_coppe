import React, { Component } from 'react';
import CalendarContainer from "./components/containers/CalendarContainer";

class App extends Component {
  render() {
    return (
      <div>
        <CalendarContainer giornata={1}/>
        <CalendarContainer giornata={2}/>
        <CalendarContainer giornata={3}/>
        <CalendarContainer giornata={4}/>
        <CalendarContainer giornata={5}/>
        <CalendarContainer giornata={6}/>
      </div>
    );
  }
}

export default App;

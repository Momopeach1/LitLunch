import React, { Component } from 'react';
import './App.css';
import EventCard from './components/EventCard';

class App extends Component {
  render() {
    return (
      <div>
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </div>

    );
  }
}

export default App;

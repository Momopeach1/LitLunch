import React, { Component } from 'react';
import './App.css';
import EventCard from './components/EventCard';
import NaviBar from './components/NaviBar';

class App extends Component {
  render() {
    return (
      <div>
        <NaviBar/>
        <EventCard/>
      </div>

    );
  }
}

export default App;

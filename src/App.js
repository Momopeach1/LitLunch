import React, { Component } from 'react';
import './App.css';
import Events from './components/Events';
import NaviBar from './components/NaviBar';
import Filter from './components/Filter';
//import { Route, Switch } from 'react-router-dom';
// <Switch>
//   <Route exact path="/" component={JoinEvents} />
//   <Route exact path="/create" component={CreateEvent} />
//   <Route exact path="/settings" component={Settings} />
//   <Route exact path="/about" component={About} />
//   <Route exact path="/profile" component={Profile} />
// </Switch>




class App extends Component {


  render() {
    return (
      <div>
        <NaviBar/>
        <div className = "my_info_banner"><div id = "location_icon"></div><p style = {{"display": "inline-block","vertical-align": "top;"}}><i>695 Park Ave, New York, NY 10065</i></p></div>
        <div className = "view-wrap">
        	<div className = "filter_wrap"><div className = "filter_content"><Filter /></div></div>
	        <div className = "events_wrap">
	      	  <Events/>
	        </div>
        </div>
      </div>

    );
  }
}

export default App;

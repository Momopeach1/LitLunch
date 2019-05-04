import React, { Component } from 'react';
import './App.css';
import EventCard from './components/EventCard';

class App extends Component {
/// /events/:id/signup
// /events/new'

/// fetch post data
/*
method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({a: 1, b: 'Textual content'})

*/


/*
Creating a new event expects these variable names
username : 'john',
zipcode: '12345',
start,
end,
restaurant_name,
restaurant_location,
description

*/

/*
url.com/events
url.com/events/:event_id/join
url.com/events/new

url.com/users/:user_id/registered_events/
GET

url.com/users/:user_id/registered_events/:event_id
GET

url.com/users/:user_id/registered_events/new
POST
{password, event_id}

url.com/users/:user_id/registered_events/:event_id/delete
POST
{password}




url.com/users/:user_id/created_events/new
url.com/users/:user_id/created_events/edit


url.com/users/new
POST
{password}

url.com/users/:user_id
POST
{password}
*/

  constructor(){
    super();

    this.state = {
      "restaurants":["starbucks", "panera"],
      "events":{},
      "username":"john",
      "event_id":"0",
      "zipcode":"12345",
      "start":"00:00:00",
      "end":"23:59:59",
      "restaurant_name":"Hungry Hawks",
      "restaurant_location":"Here",
      "description":"Testing",
      "user_id":"0",
      "password":"supersecurepassword"
    }
    this.getEvents = this.getEvents.bind(this);
    this.getEventWithId = this.getEventWithId.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.getRegisteredEvents = this.getRegisteredEvents.bind(this);
    this.getRegisteredEventWithId = this.getRegisteredEventWithId.bind(this);
    this.newRegisteredEvent = this.newRegisteredEvent.bind(this);
    this.deleteRegisteredEvent = this.deleteRegisteredEvent.bind(this);
    this.createUser = this.createUser.bind(this);
    this.newCreatedEvent = this.newCreatedEvent.bind(this);
    this.editCreatedEvent = this.editCreatedEvent.bind(this);
  }

  getEvents(){
    let app = this;
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/events/").then(function(res){
      return res.json();
    }).then(function(res){
    //  app.setState({"events":res});
      console.log(res);

    })
  }

  getEventWithId(){
    let app = this;
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/events/" + app.state.event_id).then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      console.log(res);

    })
  }

  getRegisteredEvents(){
    let app = this;
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/users/" + app.state.user_id + "/registered_events/").then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      console.log(res);

    })
  }

  getRegisteredEventWithId(){
    let app = this;
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/users/" + app.state.user_id + "/registered_events/" + app.state.event_id).then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      console.log(res);

    })
  }

  createEvent(){
    let app = this;
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/events/new",{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username:app.state.username, zipcode:app.state.zipcode, start:app.state.start, end:app.state.end, restaurant_name:app.state.restaurant_name, restaurant_location:app.state.restaurant_location, description:app.state.description})
    }).then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      console.log(res);

    })
  }

  newRegisteredEvent(){
    let app = this;
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/users/" + app.state.user_id + "/registered_events/new",{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password:app.state.password, event_id:app.state.event_id})
    }).then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      console.log(res);

    })
  }

  deleteRegisteredEvent(){
    let app = this;
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/users/" + app.state.user_id + "/registered_events/" + app.state.event_id + "/delete",{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password:app.state.password})
    }).then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      console.log(res);

    })
  }

  newCreatedEvent(){
    let app = this;
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/users/" + app.state.user_id + "/created_events/new",{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password:app.state.password, event_id:app.state.event_id})
    }).then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      console.log(res);

    })
  }

  editCreatedEvent(){
    let app = this;
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/users/" + app.state.user_id + "/created_events/edit",{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password:app.state.password, event_id:app.state.event_id})
    }).then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      console.log(res);

    })
  }

  createUser(){
    let app = this;
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/users/new",{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password:app.state.password})
    }).then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      console.log(res);

    })
  }

  geUserId(){
    let app = this;
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/users/"+app.state.user_id,{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password:app.state.password})
    }).then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      console.log(res);

    })
  }

  render() {
    return (
      <div>
        <button onClick = {this.createEvent}>Test Create Event</button>
        <button onClick = {this.getRegisteredEvents}>Test getRegisteredEvents</button>
        <button onClick = {this.getRegisteredEventWithId}>Test getRegisteredEventWithId</button>
        <button onClick = {this.newRegisteredEvent}>Test newRegisteredEvent</button>
        <button onClick = {this.deleteRegisteredEvent}>Test deleteRegisteredEvent</button>
        <button onClick = {this.createUser}>Test createUser</button>
        <button onClick = {this.getUserId}>Test createUserId</button>
        <button onClick = {this.newCreatedEvent}>Test newCreatedEvent</button>
        <button onClick = {this.editCreatedEvent}>Test editCreatedEvent</button>
      </div>
    );
  }
}

export default App;

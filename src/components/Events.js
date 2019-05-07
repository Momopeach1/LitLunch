    
import React, {Component} from 'react';
import EventCard from './EventCard';
import * as firebase from 'firebase/app';




class Events extends Component{

  constructor(){
    super();
    this.state = {
      events:[],
      displayJoining:false
    }
    this.joinEvent = this.joinEvent.bind(this);
    this.newRegisteredEvent = this.newRegisteredEvent.bind(this);
    this.confirmJoin = this.confirmJoin.bind(this);
  }
  newRegisteredEvent(){

    console.log("https://us-central1-litlunch.cloudfunctions.net/litlunch/events/" + this.state.event_id + "/join", this.props.user.ra);

    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/events/" + this.state.event_id + "/join",{
      method: "POST",
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':this.props.user.ra
      },body: JSON.stringify({displayName:this.props.user.displayName})
    }).then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      console.log(res);

    })
  }

    componentDidMount(){
    let a = this;
      firebase.database().ref("events").on("value", function(snap){
        if(snap.val()==null){
           a.setState({"events":[]})
          return;
        }
        else{
          a.setState({"events":snap.val()})
        }
      })
    //fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/events/").then((res)=>{return res.json()}).then((data)=>{this.setState({"events":data}); console.log(data)});
  }


  joinEvent (cf, e_id){
    console.log(cf, e_id);
    this.setState({"displayJoining":true, "currentFocus":cf, "event_id":e_id});
   }
   confirmJoin(){
    this.newRegisteredEvent();
    this.setState({"displayJoining":false});
   }
  render(){
    let rendered_events = [];
   for(let event in this.state.events) {

      let temp = (<EventCard event_id = {event} creator =  {this.state.events[event].creator} url_img =  {this.state.events[event].img_url}  joinEvent = {this.joinEvent} member_count = {this.state.events[event].member_count} time = {this.state.events[event].time} location = {this.state.events[event].restaurant}/>);
      rendered_events.push(temp);
      console.log(this.state.events[event]);
    }
rendered_events.reverse();


    return (<div className = "view_wrapb">
            <div id = "joining_event_card" style = {{"display": this.state.displayJoining?"block":"none"}}>
            <p>Confirm joining event at<br/> {this.state.currentFocus}?</p>
            <div class = "confirming_buttons"><div className= "cb_join" onClick = {this.confirmJoin}>Join</div><div  className= "cb_cancel" onClick = {this.confirmJoin}>Cancel</div></div>
            </div>
            <div className = "view_events_grid">
           {rendered_events}
           </div>
          </div>);
  }
}


export default Events;
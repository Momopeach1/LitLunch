    
import React, {Component} from 'react';
import EventCard from './EventCard';


class Events extends Component{

  constructor(){
    super();
    this.state = {
      events:[{name:"2"}],
      displayJoining:false
    }
    this.joinEvent = this.joinEvent.bind(this);
    this.confirmJoin = this.confirmJoin.bind(this);
  }


    componentDidMount(){
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/events/").then((res)=>{return res.json()}).then((data)=>{this.setState({"events":data}); console.log(data)});
  }


  joinEvent (cf){
    this.setState({"displayJoining":true, "currentFocus":cf});
   }
   confirmJoin(){
    this.setState({"displayJoining":false});
   }
  render(){
    let rendered_events = [];
   for(let event in this.state.events) {

      let temp = (<EventCard url_img =  {this.state.events[event].img_url}  joinEvent = {this.joinEvent} member_count = {this.state.events[event].member_count} time = {this.state.events[event].time} location = {this.state.events[event].restaurant}/>);
      rendered_events.push(temp);
    }



    return (<div>
            <div id = "joining_event_card" style = {{"display": this.state.displayJoining?"block":"none"}}>
            <p>Confirm joining event at<br/> {this.state.currentFocus}?</p>
            <div class = "confirming_buttons"><div className= "cb_join" onClick = {this.confirmJoin}>Join</div><div  className= "cb_cancel" onClick = {this.confirmJoin}>Cancel</div></div>
            </div>
           {rendered_events}
          </div>);
  }
}


export default Events;
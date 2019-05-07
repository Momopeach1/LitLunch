    
import React, {Component} from 'react';
import * as firebase from 'firebase/app';
import './current_event.scss';

//import { Route, Switch } from 'react-router-dom';
// <Switch>
//   <Route exact path="/" component={JoinEvents} />
//   <Route exact path="/create" component={CreateEvent} />
//   <Route exact path="/settings" component={Settings} />
//   <Route exact path="/about" component={About} />
//   <Route exact path="/profile" component={Profile} />
// </Switch>




class CurrentEvent extends Component {
	constructor(){
		super();
		this.state = {
			"restaurant":"Dominos",
			"time":"3:30pm",
			"Owner":"Jake",
			"current_event":"",
			"current_event_info":""
		}
		this.leaveRegisteredEvent = this.leaveRegisteredEvent.bind(this);
	}

    leaveRegisteredEvent(){
    let app = this;
    console.log("https://us-central1-litlunch.cloudfunctions.net/litlunch/events/" +  app.state.current_event + "/leave");
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/events/" +  app.state.current_event + "/leave",{
      method: "POST",
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':this.props.user.ra
      },
      body: JSON.stringify({password:app.state.password})
    }).then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      console.log(res);

    })
  }
    componentDidMount(){
    let a = this;
      firebase.database().ref("users/"+this.props.user.uid + "/current_event").on("value", function(snap){
        if(snap.val()==null)
        	 a.setState({"current_event":""});
        else
          a.setState({"current_event":snap.val()});
      console.log(snap.val());
      })
       firebase.database().ref("events/"+this.state.current_event).on("value", function(snap){
        if(snap.val()==null)
        	 a.setState({"current_event_info":""});
        else
          a.setState({"current_event_info":snap.val()});
      })
    }
  render(){
  
  	let rendered_members = [];
  	if(this.state.current_event_info&&this.state.current_event_info[this.state.current_event]){
  			
  		for(let member in this.state.current_event_info[this.state.current_event].members){
  			let temp = (<li><p>{this.state.current_event_info[this.state.current_event].members[member]}</p></li>);
  			rendered_members.push(temp);
  		}
  	}
  
  	if(!this.state.current_event_info||!this.state.current_event_info[this.state.current_event])
  		return(<div></div>)
  	else
	  	return(
				<div>
					<div className="current_event">
						<div className = "current_event_wrap">
							<div className = "current_event_wrap_grid">
								<div className = "current_event_wrap_grid_enc_a">
									<div className = "event_pic"></div>
									<p className = "brief_intro">LITLUNCH AT</p>
									<p className = "restaurant_time">3:00pm</p>
									<p className = "restaurant_name">{this.state.current_event_info[this.state.current_event].restaurant}</p>
									<p className = "restaurant_location">{this.state.current_event_info[this.state.current_event].location}</p>
									<p className = "restaurant_desc">{this.state.current_event_info[this.state.current_event].description}</p>
									<button className = "restaurant_leave" onClick = {this.leaveRegisteredEvent}>Cancel</button>
								</div>
								<div className = "current_event_wrap_grid_enc_b">
										<p>Attending</p>
									<ul className = "current_members">
									{rendered_members}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
);
  }
}
export default CurrentEvent;
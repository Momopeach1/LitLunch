
import React, {Component} from 'react';
import './style.scss';
import { Button } from 'semantic-ui-react';

class CreateEvents extends Component{

  constructor(){
    super();
     let currDateConstructor = new Date(Date.now());
     let hoursConstructor = currDateConstructor.getHours();
    let minutesConstructor = currDateConstructor.getMinutes();
     let mindateConstructor = ""+ currDateConstructor.getFullYear() + "-" + ((currDateConstructor.getMonth()+1) <=9 ? ('0'+(currDateConstructor.getMonth()+1)):(currDateConstructor.getMonth()+1)) + "-" + (currDateConstructor.getDate() <= 9 ? ('0'+currDateConstructor.getDate()):currDateConstructor.getDate());

    let minTimeConstructor = "" + (hoursConstructor<=9?"0"+(hoursConstructor):hoursConstructor) + ":" + (minutesConstructor<=9?"0"+minutesConstructor:minutesConstructor);

    this.myFunction = this.myFunction.bind(this);
    this.submitData = this.submitData.bind(this);
    this.DoSomething = this.DoSomething.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.state = {
      "date":"",
      "start_time":""+minTimeConstructor,
      "end_time":""+minTimeConstructor,
      "dateDisplay":""+mindateConstructor,
      "description":""
    }


  }

    createEvent(img_url, date, start, end, restaurant_name, restaurant_location, description){
      console.log(this.props.user.displayName, start, end, restaurant_name, restaurant_location, description);
    let app = this;
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/events/new",{
      method: "POST",
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':this.props.user.ra
      },
      body: JSON.stringify({ofs:240, date:date, img_url:img_url, username:app.props.user.displayName, zipcode:10000, start:start, end:end, restaurant_name:restaurant_name, restaurant_location:restaurant_location, description:description})
    }).then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      console.log(res);

    })
  }

  submitData(){
/*
if(!document.getElementById("start_day").checkValidity())
return

if(!document.getElementById("end_time").checkValidity())
return

if(!document.getElementById("description").checkValidity())
return*/




    this.createEvent(this.props.img_url, (document.getElementById("start_day").value), (document.getElementById("start_time").value), (document.getElementById("end_time").value), this.props.restaurant,this.props.location, (document.getElementById("description").value));
  }


  DoSomething(){
document.getElementById('button').addEventListener("click", function() {
  document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
  document.querySelector('.bg-modal').style.display = "none";
});
  }

 handleStartTime = e => {
    this.setState({start_time: e.target.value});
  }
   handleEndTime = e => {
    this.setState({end_time: e.target.value});
  }
   handleDate = e => {
    this.setState({dateDisplay: e.target.value});
  }
    handleDesc = e => {
    this.setState({description: e.target.value});
  }

  myFunction(){
  document.getElementById("myDropdown").classList.toggle("show");


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  }




  render(){
    let currDate = new Date(Date.now());
    let hours = currDate.getHours();
    let minutes = currDate.getMinutes();
    //max="1979-12-31"
    let min = ""+ currDate.getFullYear() + "-" + ((currDate.getMonth()+1) <= 9 ? ('0'+(currDate.getMonth()+1)):(currDate.getMonth()+1)) + "-" + (currDate.getDate() <= 9 ? ('0'+currDate.getDate()):currDate.getDate());
    
    let minTime = "" + (hours<=9?"0"+(hours):hours) + ":" + (minutes<=9?"0"+minutes:minutes);


    
    return (
<div>

<div className="bg-modal">
<div className="modal-contents">
<p>DATE</p>
 <input id = "start_day" type="date" min={this.state.dateDisplay} required value = {this.state.dateDisplay} onChange={this.handleDate}/>
 <p>START TIME</p>
 <input id = "start_time" type="time" min = {minTime} required value = {this.state.start_time} onChange={this.handleStartTime}/> 
 <p>END TIME</p>
 <input id = "end_time"   type="time" min ={this.state.start_time} required value = {this.state.end_time} onChange={this.handleEndTime}/>
 <input id = "description" type="text" minlength = {1} required placeholder="Description" value = {this.state.description} onChange={this.handleDesc}/>
<Button disabled = {((document.getElementById("description")&&document.getElementById("start_day")&&document.getElementById("end_time")&&document.getElementById("start_time"))&&(!document.getElementById("start_day").checkValidity()||!document.getElementById("end_time").checkValidity()||!document.getElementById("start_time").checkValidity()))} color="blue" onClick ={this.submitData}>Create</Button>
</div>
</div>
</div>
);
  }
}


export default CreateEvents;
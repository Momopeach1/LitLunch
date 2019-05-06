    
import React, {Component} from 'react';
import './style.css'

class CreateEvents extends Component{

  constructor(){
    super();
    this.myFunction = this.myFunction.bind(this);
    this.submitData = this.submitData.bind(this);
    this.DoSomething = this.DoSomething.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.state = {
      "date":""
    }


  }

    createEvent(start, end, restaurant_name, restaurant_location, description){
      console.log(start, end, restaurant_name, restaurant_location, description);
    /*let app = this;
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/events/new",{
      method: "POST",
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':this.props.user.ra
      },
      body: JSON.stringify({username:app.props.user.uid, zipcode:app.state.zipcode, start:app.state.start, end:app.state.end, restaurant_name:app.state.restaurant_name, restaurant_location:app.state.restaurant_location, description:app.state.description})
    }).then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      console.log(res);

    })*/
  }

  submitData(){
    this.createEvent((document.getElementById("start_day").value), (document.getElementById("end_time").value), "starbucks", "4348 156 w egh gu", (document.getElementById("description").value));
  }


  DoSomething(){
document.getElementById('button').addEventListener("click", function() {
  document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
  document.querySelector('.bg-modal').style.display = "none";
});
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
    return (
<div>

<div className="bg-modal">
<div className="modal-contents">
 <input id = "start_day"  type="date" placeholder="max Wait"/>
 <input id = "start_time" type="time" placeholder = "when"/> 
 <input id = "end_time"   type="time" placeholder="max Wait"/>
 <input id = "description" type="text" placeholder="Description"/>
<a href="#" class="button" onClick ={this.submitData}>Submit</a>
</div>
</div>
</div>
);
  }
}


export default CreateEvents;
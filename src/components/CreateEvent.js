    
import React, {Component} from 'react';
import './style.scss'

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

    createEvent(img_url, start, end, restaurant_name, restaurant_location, description){
      console.log(this.props.user.displayName, start, end, restaurant_name, restaurant_location, description);
    let app = this;
    fetch("https://us-central1-litlunch.cloudfunctions.net/litlunch/events/new",{
      method: "POST",
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':this.props.user.ra
      },
      body: JSON.stringify({img_url:img_url, username:app.props.user.displayName, zipcode:10000, start:start, end:end, restaurant_name:restaurant_name, restaurant_location:restaurant_location, description:description})
    }).then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      console.log(res);

    })
  }

  submitData(){
    this.createEvent(this.props.img_url, (document.getElementById("start_day").value), (document.getElementById("end_time").value), this.props.restaurant,this.props.location, (document.getElementById("description").value));
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
<p>DATE</p>
 <input id = "start_day"  type="date" placeholder="max Wait"/>
 <p>START TIME</p>
 <input id = "start_time" type="time" placeholder = "when"/> 
 <p>END TIME</p>
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
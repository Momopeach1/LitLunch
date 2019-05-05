    
import React, {Component} from 'react';

class CreateEvents extends Component{

  constructor(){
    super();
    this.myFunction = this.myFunction.bind(this);
    this.submitData = this.submitData.bind(this);
    this.DoSomething = this.DoSomething.bind(this);


  }

  submitData(){
    console.log(document.getElementById("zip_code").value);
    console.log(document.getElementById("user_name").value);
    console.log(document.getElementById("start_time").value);
    console.log(document.getElementById("end_time").value);
    console.log(document.getElementById("description").value);
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
    return (<div>

      <div class="bg-modal">
  <div class="modal-contents">
          <div className="close" onClick = {this.DoSomething}>+</div>
          <form action="">

      <input id = "user_name" type="text" placeholder="User name"/>
      <input id = "zip_code" type="text" placeholder="ZipCode"/>
       start of the event
       <input id = "start_time" type="datetime-local" name="min time"/> 
       End of the event <input id = "end_time"  type="datetime-local" placeholder="max Wait"/>
      <input id = "description" type="text" placeholder="Description"/>
      <a href="#" class="button" onClick ={this.submitData}>Submit</a>
    </form>
    </div>
    </div>



    	<section class="hero">

</section>
<section class="hero">
  <div class="hero-content">
   <a href="#" id="button" class="button" onClick = {this.DoSomething}>Click Me</a>
  </div>
  <div class="dropdown">
  <button onClick={this.myFunction} className="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Signup</a></li>
    <li><a href="">Contact</a></li>


  </div>
</div>
</section>

  </div>);
  }
}


export default CreateEvents;
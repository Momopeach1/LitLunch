    
import React, {Component} from 'react';
import './style.scss';
import Filter from './Filter';

import CreateEvent from './CreateEvent';
import firebaseConfig from '../firebaseConfig';


class CreateEventContainer extends Component{
	  constructor(){
    super();
    this.state = {
      "restaurants":[],
      "location":"",
      "restaurant":""
    }
    this.submit_filter = this.submit_filter.bind(this);
    this.setRestaurant = this.setRestaurant.bind(this);
  }
  setRestaurant(img_url, restaurant, location){
    this.setState({"img_url":img_url, "restaurant":restaurant,"location":location});
    console.log(restaurant, location);
  }

  submit_filter(rating, price, zipCode){
    console.log(rating,price,zipCode);
    let a =this;
     fetch("https://safe-headland-63176.herokuapp.com/restaurant_retrieval",{
      method: "POST",
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },body: JSON.stringify({zipCode:zipCode,price:price,categories:'Mexican'})
    }).then(function(res){
      return res.json();
    }).then(function(res){
      //app.setState({"events":res});
      a.setState({"restaurants":res});

    })
  }

	render(){
		let restaurants_retrieved_rendered = [];
for(let restaurant in this.state.restaurants){
  let temp = (<li onClick = {()=>{this.setRestaurant(this.state.restaurants[restaurant].image_url,this.state.restaurants[restaurant].name, this.state.restaurants[restaurant].location)}}><div className = "img" style = {{"background-image":"url(" + this.state.restaurants[restaurant].image_url + ")"}}></div><p>{this.state.restaurants[restaurant].name}</p><p>{this.state.restaurants[restaurant].location}</p></li>);
  restaurants_retrieved_rendered.push(temp);
}
		return(
			         <div className = "view-wrap">
                    <div className = "filter_wrap"><div className = "filter_content">
                    <Filter submit_filter = {this.submit_filter}/>
                    </div></div>
                    <div className = "restaurants_div">
                      <ul>{restaurants_retrieved_rendered}</ul>
                    </div>
                    <div className = "events_wrap">
                      <CreateEvent img_url = {this.state.img_url} restaurant = {this.state.restaurant} location = {this.state.location} user = {this.props.user} />
                    </div>
                  </div>
			)
	}
}

export default CreateEventContainer;
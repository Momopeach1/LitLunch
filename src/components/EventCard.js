    
import React, {Component} from 'react'
import { Card, Button } from 'semantic-ui-react'
import './card_wrap_semantic.scss';


//'url("https://codepo8.github.io/canvas-images-and-pixels/img/horse.png");'
class EventCard extends Component{


  render(){
    return(<div className = "card-wrap-semantic">
      <Card id = "card">
            <Card.Content id = "creator">
            <div id = "image_wrap">
              <div id= "image" style= {{"background-image":'url("' + this.props.url_img + '")'}}></div>
              </div>
              <Card.Header style = {{"text-transform":"uppercase","padding-top":"30px","font-size":"30px","font-family":"Futura","font-weight":"bold"}}>{this.props.location}</Card.Header>
              <Card.Meta>{this.props.time}</Card.Meta>
              <Card.Description>
                {this.props.creator} wants to Have lunch at <strong style = {{"text-transform":"uppercase"}}>{this.props.location}</strong>
                {parseInt(this.props.member_count) > 1 ? " with " + parseInt(this.props.member_count-1) + " more!" :""}
              </Card.Description>
            </Card.Content>

            <Card.Content extra>
              <div className='ui two buttons'>
                <Button id = "join_button" onClick = {()=>{this.props.joinEvent(this.props.location, this.props.event_id)}}>
                  Join
                </Button>
                <Button id = "info_button">
                  Event Info
                </Button>
              </div>
            </Card.Content>
          </Card>
      </div>);
  }
}

export default EventCard
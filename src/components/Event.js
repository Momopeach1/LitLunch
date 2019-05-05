import React, { Component } from "react";
import { Button, Container, Segment, Header } from "semantic-ui-react";

import JoinEvent from "./JoinEvent";

class Event extends Component {
  constructor(props) {
      super(props);
      this.state = {
          showPopup: false
      }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return(
      <div>
        <Container>
          <Segment attached="top">
            <Header as="h3">{this.props.item.restaurantName}</Header>
          </Segment>
          <Segment attached="bottom">
            <Header as="h4">Date: {this.props.item.date}</Header>
            <Header as="h4">Time: {this.props.item.time}</Header>
            <Button onClick={this.togglePopup.bind(this)}>More information</Button>
          </Segment>
        </Container>
        {this.state.showPopup ?
          <JoinEvent
            closePopup={this.togglePopup.bind(this)}
            restaurantName={this.props.item.restaurantName}
            creatorUsername={this.props.item.creatorUsername}
            date={this.props.item.date}
            time={this.props.item.time}
            description={this.props.item.description}
            price={this.props.item.price}
            rating={this.props.item.rating}
            image={this.props.item.image}
          />
          : null
        }
      </div>
    )
  }
}

export default Event;

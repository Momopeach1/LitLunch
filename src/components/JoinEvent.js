import React, { Component } from "react";
import { Button, Container, Header, Segment } from "semantic-ui-react";

class JoinEvent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="popup">
          <div className="popup_inner">
            <Segment attached="top">
              <Header as="h1">Join Event</Header>
            </Segment>
            <Segment attached>
              <Header as="h2">Restaurant: {this.props.restaurantName}</Header>
              <Header as="h3">Event Creator: {this.props.creatorUsername}</Header>
              <Container>
                {this.props.description}
              </Container>
              <p><i>{this.props.price}</i></p>
              <Header as="h3">Rating: {this.props.rating}</Header>
            </Segment>
            <Segment attached="bottom">
              <Button>Join</Button> <Button onClick={this.props.closePopup}>Cancel</Button>
            </Segment>
          </div>
        </div>
    )
  }
}

export default JoinEvent;

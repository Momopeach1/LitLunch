import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";

import Filter from "../../../components/Filter.js";
import JoinEvent from "./JoinEvent";
import Event from "./Event";

import events from "../../../events";

class SearchEvent extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: events
    }
  }

  render() {
    const eventItems = this.state.events.map(item => <Event key={item.id} item={item}/>);
    return(
      <Grid columns={2}>
        <Grid.Column width={4}>
          <Filter />
        </Grid.Column>

        <Grid.Column>
          {eventItems}

        </Grid.Column>
      </Grid>
    )
  }
}

export default SearchEvent;

import React, { Component } from 'react';
import { Button, Checkbox, Divider, Header, Input, Rating, Segment } from 'semantic-ui-react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        rating: 0,
        price: 0,
        zipCode: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleTime = this.handleTime.bind(this);
  }

  handleChange = e => {
    console.log("rating: " + e.target.value);
    this.setState({ rating: e.target.value });
  }

  handlePrice = e => {
    console.log("price: " + e.target.value);
    this.setState({price: e.target.value});
  }

  handleTime = e => {
    console.log("time: " + e.target.value);
    this.setState({time: e.target.value});
  }

  handleZIP = e => {
    console.log("zip: " + e.target.value);
    this.setState({zipCode: e.target.value});
  }

  render() {
    const { rating } = this.state;

    return(
      <div>
        {/*<Container style={{ padding: '5em 0em' }}>*/}
          {/*<Grid columns={2}>*/}
            {/*<Grid.Column>*/}
              <Segment attached='top'>
                <Header as='h1'>Filters</Header>
              </Segment>
              <Segment attached>
                <Header as="h3">ZIP Code</Header>
                <div align="center"><Input
                  icon='tags'
                  iconPosition='left'
                  label={{ tag: true, content: 'Add ZIP Code' }}
                  labelPosition='right'
                  onChange= {this.handleZIP}
                  placeholder='Enter ZIP Code'
                />
              </div>
              </Segment>
              <Segment attached>
                <Header as="h3">Price</Header>
                <Button.Group color="blue">
                  <Button onClick={this.handlePrice} value={1}>$</Button>
                  <Button onClick={this.handlePrice} value={2}>$$</Button>
                  <Button onClick={this.handlePrice} value={3}>$$$</Button>
                  <Button onClick={this.handlePrice} value={4}>$$$$</Button>
                  <Button onClick={this.handlePrice} value={5}>$$$$$</Button>
                </Button.Group>
              </Segment>

              <Segment attached='bottom'>
                 <Button onClick={()=>{this.props.submit_filter(this.state.rating, this.state.price, this.state.zipCode)}} value={1}>search</Button>
              </Segment>
            {/*</Grid.Column>*/}
          {/*</Grid>*/}
        {/*</Container>*/}
      </div>
    )
  }
}

export default Filter;

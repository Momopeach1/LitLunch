import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';
import './navbar_wrap_semantic.scss';
import {Link} from 'react-router-dom';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {this.setState({ activeItem: name });}

  render() {
    const { activeItem } = this.state

    return (
      <div className = "navbar-wrap-semantic">
      <Menu secondary id = "menu">
        <Link to = "/events" style={{ all: 'unset' }}><Menu.Item 
        name='home' 
        active={activeItem === 'home'} 
        onClick={this.handleItemClick} 
        >Events
          </Menu.Item></Link>
        <Link to = "/create" style={{ all: 'unset' }}><Menu.Item
          name='create'
          active={activeItem === 'create'}
          onClick={this.handleItemClick}
        >Create
          </Menu.Item></Link>
        <Menu.Menu position='right'>
          <Menu.Item
            name={this.props.user_name}
          />
        </Menu.Menu>
        <Menu.Item 
        name='Sign Out' 
        active={activeItem === 'Sign Out'} 
        onClick={this.props.signOut} 
        />
      </Menu>
      </div>
    )
  }
}

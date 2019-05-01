import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react';
import './navbar_wrap_semantic.scss';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className = "navbar-wrap-semantic">
      <Menu secondary id = "menu">
        <Menu.Item 
        name='home' 
        active={activeItem === 'home'} 
        onClick={this.handleItemClick} 
        />
        <Menu.Item
          name='create'
          active={activeItem === 'create'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='browse'
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='1832871'
            active={activeItem === '1032X871'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}

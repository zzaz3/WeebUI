import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Sticky } from 'semantic-ui-react';
import AniListPage from './AniListPage';

class AniListSideBar extends Component {

  render() {

    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='wide' visible={true} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Segment>
            <AniListPage/>
          </Segment>
          <Sidebar.Pusher>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default AniListSideBar

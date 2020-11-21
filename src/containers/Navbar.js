import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';

const { Header } = Layout;

export default class Navbar extends Component {
  handleClick = e => {
    this.props.history.push(`/${e.key}`);
  };

  render() {
    const key = this.props.history.location.pathname.slice(1).split('/')[0];
    const MenuItem = (key, icon, title) => ({
      key,
      icon,
      title
    });
    // If this is a composite route, get both the composite and origin.
    // const keys = location.includes('/') ? [location.split('/').slice(-1).pop(), location] : [location];
    return (
        <Header style={{position:'fixed',zIndex:1,width:'100%',display:'flex'}}>
          <div className='logo' style={{color:'white',fontSize:parseInt(this.props.theme.HEADER_HEIGHT*0.625),marginRight:'18px'}}>
            <Icon type='crown' />
          </div>
          <Menu
            theme='dark'
            onClick={this.handleClick}
            selectedKeys={[key]}
            mode='horizontal'
            style={{fontFamily:'NotoSerifBold',lineHeight:`${this.props.theme.HEADER_HEIGHT}px`}}
          >
            {[
              // MenuItem('worldmap', 'flag', 'WORLDMAP'),
              MenuItem('combat', 'fire', 'COMBAT'),
              MenuItem('adventure', 'compass', 'ADVENTURE'),
              MenuItem('class', 'deployment-unit', 'CLASS'),
              MenuItem('race', 'meh', 'RACE'),
              MenuItem('spells', 'book', 'SPELLS'),
              // MenuItem('deities', 'thunderbolt', 'DEITIES'),
              MenuItem('creator', 'experiment', 'CREATOR'),
            ].map(i => (
              <Menu.Item key={i.key}>
                <Icon type={i.icon} />
                {i.title}
              </Menu.Item>
            ))}
            {/* <SubMenu
              title={
                <span className='submenu-title-wrapper'>
                  <Icon type='deployment-unit' />
                  Class
                </span>
              }
            >
              <Menu.Item key='class'>Overview</Menu.Item>
              <Menu.ItemGroup title='Playable Builds'>
                <Menu.Item key='class/paladin'>Paladin</Menu.Item>
                <Menu.Item key='class/rogue'>Rogue</Menu.Item>
                <Menu.Item key='class/wizard'>Wizard</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu> */}
            {/* <SubMenu
              title={
                <span className='submenu-title-wrapper'>
                  <Icon type='meh' />
                  Race
                </span>
              }
            >
              <Menu.Item key='race'>Overview</Menu.Item>
              <Menu.ItemGroup title='Playable Types'>
                <Menu.Item key='race/human'>Human</Menu.Item>
                <Menu.Item key='race/elf'>Elf</Menu.Item>
                <Menu.Item key='race/dwarf'>Dwarf</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu> */}
          </Menu>
        </Header>
    );
  }
}
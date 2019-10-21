import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon, Input, Modal, Button } from 'antd';
const { Search } = Input;
const SubMenu = Menu.SubMenu;

class RightMenu extends Component {

  render() {
    return (
      <div>
        <div className="right-menu">
          <Menu mode="horizontal">
            <SubMenu title={<span><i className="fa fa-search" aria-hidden="true"></i></span>}>
              <Search
                placeholder="Search for courses"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
            </SubMenu>
            <Menu.Item>
              <a href="">
                <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
              </a>
            </Menu.Item>
            <Menu.Item>
              <NavLink exact to='/login' className="nav-link" href="#">Log In</NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}
export default RightMenu;

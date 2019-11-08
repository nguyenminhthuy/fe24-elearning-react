import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Input } from 'antd';
const { Search } = Input;

class RightMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="right-menu">
          <Menu mode="horizontal">
            <Menu.Item>
              <Search
                placeholder="Tìm kiếm khóa học"
                // onSearch={value => console.log(value)}
                onSearch={keySearch => this.props.history.push('/search-result/' + keySearch)}
                style={{ width: 200 }}
              />
            </Menu.Item>
            <Menu.Item>
              <a href="">
                <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
              </a>
            </Menu.Item>
            <Menu.Item>
              <NavLink exact to='/login' className="nav-link" href="#">Đăng nhập</NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}
export default withRouter(RightMenu);

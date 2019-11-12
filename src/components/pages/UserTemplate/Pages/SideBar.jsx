import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;

export default class SideBar extends Component {
    render() {
        return (
            <Sider width={280} style={{ background: '#fff', height: 1000 }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <div className="card">
                        <i className="fa fa-user-circle card_icon pb-3"></i>
                        <h3>Full name</h3>
                        <h6>Học viên</h6>
                    </div>
                    <Menu.Item>
                        <NavLink exact to='/user/userprofile'>
                            <Icon type="user" />Hồ sơ cá nhân
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink exact to='/user/usercourse'>
                            <Icon type="appstore" />
                            Danh sách khóa học
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

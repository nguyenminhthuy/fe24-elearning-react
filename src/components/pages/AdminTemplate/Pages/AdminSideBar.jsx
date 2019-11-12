import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;

export default class AdminSideBar extends Component {
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
                        <h6>Giáo vụ</h6>
                    </div>
                    <Menu.Item>
                        <NavLink exact to='/admin/adminprofile'>
                            <Icon type="user" />
                            Hồ sơ cá nhân
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink exact to='/admin/managecourselist'>
                            <Icon type="code" />
                            Quản lý danh mục khóa học
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink exact to='/admin/managecourse'>
                            <Icon type="appstore" />
                            Quản lý khóa học
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink exact to='/admin/manageuser'>
                            <Icon type="solution" />
                            Quản lý học viên
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

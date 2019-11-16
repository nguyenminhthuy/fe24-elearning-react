import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;

export default class AdminSideBar extends Component {
    render() {
        let userInfo = JSON.parse(localStorage.getItem('userLogin'));

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
                        <h4>{userInfo.hoTen}&nbsp;
                        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /></h4>         
                        <h6>Giáo vụ</h6>
                    </div>                    
                    <Menu.Item>
                        <NavLink exact to='/admin/profile'>
                            <Icon type="profile" />
                            Hồ sơ cá nhân
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink exact to='/admin/manageuser'>
                            <Icon type="solution" />
                            Quản lý người dùng
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
                </Menu>
            </Sider>
        )
    }
}

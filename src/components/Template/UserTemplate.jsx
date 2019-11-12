import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import NavBarMenu from '../pages/HomeTemplate/NavBarMenu/NavBarMenu';
import { Layout, BackTop,Menu } from 'antd';
import SideBar from '../pages/UserTemplate/Pages/SideBar';
const { Header, Content,Footer } = Layout;

const UserLayout = (props) => {
    return (
        <Fragment>
            <BackTop style={{ color: 'rgba(64, 64, 64, 0.6)' }} />
            <NavBarMenu />
            <Layout>
                <Header className="header">
                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                    </Menu>
                </Header>
                <Layout>
                    <SideBar />
                    <Layout style={{ padding: '24px 24px 0' }}>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                minHeight: 700,
                            }}
                        >
                            {props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
            <Footer>Ant Design ©2019 Created by Nguyen Minh Thuy</Footer>
        </Fragment>
    )
}


//Tạo HOC UserTemplate 
export const UserTemplate = ({ Component, ...restParam }) => {
    return (
        <Route {...restParam} render={(props) => {
            return (
                <UserLayout>
                    <Component {...props} />
                </UserLayout>
            )
        }} />
    )
}


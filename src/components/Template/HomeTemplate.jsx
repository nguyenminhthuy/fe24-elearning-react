import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import NavBarMenu from '../pages/HomeTemplate/NavBarMenu/NavBarMenu';
import { Layout, BackTop } from 'antd';
const { Footer } = Layout;

//tạo ra 1 component là homelayout
const HomeLayout = (props) => {
  return (
    <Fragment>
      <BackTop style={{ color: 'rgba(64, 64, 64, 0.6)' }}/>
      <NavBarMenu/>
      {props.children}
      <Footer>Ant Design ©2019 Created by Nguyen Minh Thuy</Footer>
    </Fragment>
  )
}


//Tạo HOC HomeTemplate 
export const HomeTemplate = ({ Component, ...restParam }) => {
  return (
    <Route {...restParam} render={(props) => {
        return (
          <HomeLayout>
              <Component {...props} />
          </HomeLayout>
        )
    }} />
  )
}


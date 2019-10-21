import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import HomePage from './components/pages/HomeTemplate/HomePage';
import { HomeTemplate } from './components/Template/HomeTemplate';
import Login from './components/pages/HomeTemplate/Form/LogIn';
import Register from './components/pages/HomeTemplate/Form/Register';
import CourseList from './components/pages/HomeTemplate/Courses/CourseList';
import CourseDetail from './components/pages/HomeTemplate/Courses/CourseDetail';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <HomeTemplate exact path='/course-list/:maDanhMuc' Component={CourseList} />
          <HomeTemplate exact path='/course-detail' Component={CourseDetail} />
          <HomeTemplate exact path='/register' Component={Register} />
          <HomeTemplate exact path='/login' Component={Login} />
          <HomeTemplate exact path='/' Component={HomePage} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

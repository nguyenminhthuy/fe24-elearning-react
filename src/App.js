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
import AllCourses from './components/pages/HomeTemplate/Courses/AllCourses';
import SearchResult from './components/pages/HomeTemplate/Pages/SearchResult';

function App() {
  return (
    <BrowserRouter >
      <Fragment>
        <Switch>
          <HomeTemplate exact path='/course-list/:maDanhMuc' Component={CourseList} />
          <HomeTemplate exact path='/course-list/:maDanhMucKhoaHoc' Component={CourseList} />
          <HomeTemplate exact path='/course-detail/:maKhoaHoc' Component={CourseDetail} />
          <HomeTemplate exact path='/all-course' Component={AllCourses} />
          <HomeTemplate exact path='/register' Component={Register} />
          <HomeTemplate exact path='/login' Component={Login} />
          <HomeTemplate exact path='/search-result/:keySearch' Component={SearchResult} />
          <HomeTemplate exact path='/' Component={HomePage} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

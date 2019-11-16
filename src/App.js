import React, { Fragment } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
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
import { UserTemplate } from './components/Template/UserTemplate';
import UserPage from './components/pages/UserTemplate/UserPage';
import ManageCoursebyUser from './components/pages/UserTemplate/Pages/ManageCoursebyUser';
import AdminPage from './components/pages/AdminTemplate/AdminPage';
import { AdminTemplate } from './components/Template/AdminTemplate';
import ManageCourse from './components/pages/AdminTemplate/Pages/ManageCourse';
import ManageCourseList from './components/pages/AdminTemplate/Pages/ManageCourseList';
import ManageUser from './components/pages/AdminTemplate/Pages/ManageUser';

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

          <UserTemplate exact path='/user/profile' Component={UserPage} />
          <UserTemplate exact path='/user/usercourse' Component={ManageCoursebyUser} />

          <AdminTemplate exact path='/admin/profile' Component={AdminPage} />
          <AdminTemplate exact path='/admin/managecourse' Component={ManageCourse} />
          <AdminTemplate exact path='/admin/managecourselist' Component={ManageCourseList} />
          <AdminTemplate exact path='/admin/manageuser' Component={ManageUser} />
          <Redirect to='/'/>
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Breadcrumb, Icon } from 'antd';
import CourseItem from './CourseItem';

export default class CourseList extends Component {
    render() {
        return (
            <div className="course-list">
                <div className="container mb-2 ml-5 mr-5">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href="/">Home</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Front End
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="course-title">
                    <h3>Popular Courses we offer</h3>
                    <p>There is a moment in the life of any aspiring.</p>
                </div>
                <div className="row m-5">
                    <div className="col-3">
                        <CourseItem />
                    </div>
                    <div className="col-3">
                        <CourseItem />
                    </div>
                    <div className="col-3">
                        <CourseItem />
                    </div>
                    <div className="col-3">
                        <CourseItem />
                    </div>
                </div>
                <div className="row m-5">
                    <div className="col-3">
                        <CourseItem />
                    </div>
                    <div className="col-3">
                        <CourseItem />
                    </div>
                    <div className="col-3">
                        <CourseItem />
                    </div>
                    <div className="col-3">
                        <CourseItem />
                    </div>
                </div>
            </div>
        )
    }
}

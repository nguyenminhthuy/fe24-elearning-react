import React, { Component } from 'react'
import { Breadcrumb, Icon, Tabs } from 'antd';
import CourseOwlCarousel from './CourseOwlCarousel';
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

export default class CourseDetail extends Component {
    render() {
        return (
            <div className="course-details">
                <div className="breadcr mb-5 ml-5 mr-5">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href="/">Home</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="/course-list">Front End</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            FE24
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="Objectives" key="1">
                                    Objectives
                                </TabPane>
                                <TabPane tab="Course Outline" key="2">
                                    Course Outline
                                </TabPane>
                                <TabPane tab="Comments" key="3">
                                    Comments
                                </TabPane>
                                <TabPane tab="Review" key="4">
                                    Review
                                </TabPane>
                            </Tabs>
                        </div>
                        <div className="col-3">
                            <div className="course-info">
                                <h4>Information</h4>
                                <p>Trainer name: Nguyen Minh Thuy</p>
                                <p>Course Fee: $100 USD</p>
                                <p>Available Seats: 15</p>
                                <p>Schedule: 15pm-17pm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <CourseOwlCarousel/>
                </div>
            </div>

        )
    }
}

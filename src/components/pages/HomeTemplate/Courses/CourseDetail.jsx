import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Tabs } from 'antd';
import CourseOwlCarousel from './CourseOwlCarousel';

//connect redux
import { connect } from 'react-redux';

//Tabpane
const { TabPane } = Tabs;
function callback(key) {
    // console.log(key);
}

export default class CourseDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { maKhoaHoc } = this.props.match.params;
        return (
            <div className="course-details">
                <div className="breadcr mb-5 ml-5 mr-5">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link exact to="/">Trang chủ</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link exact to={'/all-course'}>Khóa học</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Tên danh mục
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Tên khóa học
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="course-info">
                                <h4>Thông tin khóa học</h4>
                                <p>Giảng viên: Nguyen Minh Thuy</p>
                                <p>Học phí: $100 USD</p>
                                <p>Số lượng: 15</p>
                                <p>Thời gian học: 15pm-17pm</p>
                            </div>
                        </div>
                        <div className="col-8">
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

                    </div>
                </div>
                <div>
                    <CourseOwlCarousel />
                </div>
            </div>

        )
    }
}

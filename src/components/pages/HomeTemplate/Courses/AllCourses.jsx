import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Breadcrumb, Card } from 'antd';

//connect redux
import { connect } from 'react-redux';
import { getCoursesListAction } from '../../../../redux/actions/ManageCoursesAction';

class AllCourses extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCoursesList();
    }

    renderAllCourse() {
        return this.props.courseList.map((courseLst, index) => {
            return (
                <div className="col-3 mb-5" key={index}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img style={{ width: 300, height: 230 }}
                                alt={courseLst.tenKhoaHoc}
                                src={courseLst.hinhAnh}
                            />
                        }
                        actions={[
                            <span>{courseLst.luotXem} lượt xem</span>,
                            <span>Xem Chi tiết</span>
                        ]}
                    >
                        <div className="desc">
                            <h6>
                                <Link exact to={'/course-detail/' + courseLst.maKhoaHoc}>{courseLst.tenKhoaHoc}</Link>
                            </h6>
                            <span>{courseLst.moTa}</span>
                        </div>
                    </Card>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="course-list">
                <div className="container mb-2 ml-5 mr-5">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link exact to="/">Trang chủ</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Khóa học
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="course-title">
                    <h3>Tất cả khóa học</h3>
                </div>
                <div className="row m-5">
                    {this.renderAllCourse()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        courseList: state.ManagerCoursesReducer.courseList
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        getCoursesList: () => {
            dispatch(getCoursesListAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(AllCourses);
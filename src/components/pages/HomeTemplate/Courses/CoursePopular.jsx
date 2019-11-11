import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import CourseItem from './CourseItem';

//connect redux
import { connect } from 'react-redux';
import { getCoursesListAction } from '../../../../redux/actions/ManageCoursesAction';

class CoursePopular extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCoursesList();
    }

    renderAllCourseLimited8() {
        return this.props.courseList.slice(0, 8).map((courseLst, index) => {
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
                            <Link exact to={'/course-detail/' + courseLst.maKhoaHoc}>Xem chi tiết</Link>
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
            <div>
                <h2 className="m-5 text-center">Các khóa học phổ biến</h2>
                <div >
                    <div className="row mb-2 ml-5 mr-5">
                        {this.renderAllCourseLimited8()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProp)(CoursePopular);
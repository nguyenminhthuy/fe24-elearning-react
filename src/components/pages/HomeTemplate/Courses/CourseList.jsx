import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Breadcrumb, Card } from 'antd';
//connect redux
import { connect } from 'react-redux';
import { getCoursesCategoryAction } from '../../../../redux/actions/ManageCoursesAction';
import { getCoursesByCatAction } from '../../../../redux/actions/ManageCoursesAction';

class CourseList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCoursesCategory();
        let { maDanhMuc } = this.props.match.params;
        this.props.getCoursesByCat(maDanhMuc);
    }

    renderCourseCategory() {
        let { maDanhMuc } = this.props.match.params;
        return this.props.courseCategory.map((courseCat, index) => {
            return (
                <div key={index}>
                    {courseCat.maDanhMuc === maDanhMuc ?
                        <div>
                            <Breadcrumb.Item>
                                <Link exact to="/">Trang chủ</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link exact to={'/all-course'}>Khóa học</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                {courseCat.tenDanhMuc}
                            </Breadcrumb.Item>
                        </div>
                        : ''}
                </div>
            )
        })
    }

    renderCourseByCategory() {
        return this.props.courseByCat.map((catID, index) => {
            return (
                <div className="col-3 mb-5" key={index}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img style={{ width: 300, height: 230 }}
                                alt={catID.tenKhoaHoc}
                                src={catID.hinhAnh}
                                href={'/course-detail/' + catID.maKhoaHoc}
                            />
                        }
                        actions={[
                            <span>{catID.luotXem} lượt xem</span>,
                            <Link exact to={'/course-detail/' + catID.maKhoaHoc}>Xem chi tiết</Link>
                        ]}
                    >
                        <div className="desc">
                            <h6>
                                <Link exact to={'/course-detail/' + catID.maKhoaHoc}>{catID.tenKhoaHoc}</Link>
                            </h6>
                            <span>{catID.moTa}</span>
                        </div>
                    </Card>
                </div>
            )
        })
    }

    render() {
        let numberCourseByCat = this.props.courseByCat.length;
        return (
            <div className="course-list">
                <div className="container mb-2 ml-5 mr-5">
                    <Breadcrumb>
                        {this.renderCourseCategory()}
                    </Breadcrumb>
                </div>
                {numberCourseByCat >= 1 ?
                    <div>
                        <div className="course-title">
                            <h3>Danh sách khóa học</h3>
                        </div>
                        <div className="row m-5">
                            {this.renderCourseByCategory()}
                        </div>
                    </div>
                    :
                    <div className="course-title course-error">
                        <h3>Không có khóa học nào trong danh mục này!</h3>
                    </div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courseCategory: state.ManagerCoursesReducer.courseCategory,
        courseByCat: state.ManagerCoursesReducer.courseByCat
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        getCoursesCategory: () => {
            dispatch(getCoursesCategoryAction());
        },
        getCoursesByCat: (maDanhMuc) => {
            dispatch(getCoursesByCatAction(maDanhMuc));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(CourseList);
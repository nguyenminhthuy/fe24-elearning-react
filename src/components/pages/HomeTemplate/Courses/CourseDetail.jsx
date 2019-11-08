import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Tabs, Button } from 'antd';
import CoursePopular from './CoursePopular';

//connect redux
import { connect } from 'react-redux';
import { getCoursesDetailAction } from '../../../../redux/actions/ManageCoursesAction';

//Tabpane
const { TabPane } = Tabs;
function callback() {
    // console.log(key);
}

class CourseDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { maKhoaHoc } = this.props.match.params;
        this.props.getCoursesDetail(maKhoaHoc);
    }

    render() {
        const { courseDetailByID } = this.props;

        //Get Course List Object
        let courseListByID_Obj = this.props.courseDetailByID.danhMucKhoaHoc;
        let courseListByID_Obj2 = new Object(courseListByID_Obj);

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
                            <Link exact to={'/course-list/' + courseListByID_Obj2.maDanhMucKhoahoc} href="#">
                                {courseListByID_Obj2.tenDanhMucKhoaHoc}
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {courseDetailByID.tenKhoaHoc}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="course-info">
                                <img src={courseDetailByID.hinhAnh} alt="" style={{ width: 300, height: 230 }} />
                                <p></p>
                                <h4>{courseDetailByID.tenKhoaHoc}</h4>
                                <p>Lượt xem: {courseDetailByID.luotXem}</p>
                                <p>Ngày tạo: {courseDetailByID.ngayTao}</p>
                                <p>Số lượng học viên: {courseDetailByID.soLuongHocVien}</p>
                                <p>Thời gian: Liên hệ</p>
                                <Button type="primary" size='large' block>
                                    Ghi danh
                                </Button>
                            </div>
                        </div>
                        <div className="col-8">
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="Nội dung khóa học" key="1">
                                    {courseDetailByID.moTa}
                                </TabPane>
                                <TabPane tab="Hình ảnh khóa học" key="2">
                                    <img src={courseDetailByID.hinhAnh} alt="" style={{ width: '100%', height: '100%' }} />
                                </TabPane>
                                <TabPane tab="Cảm nhận học viên" key="3">
                                    Đang cập nhật...
                                </TabPane>
                            </Tabs>
                        </div>

                    </div>
                </div>
                <div>
                    {/* <CourseOwlCarousel /> */}
                    <CoursePopular/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courseDetailByID: state.ManagerCoursesReducer.courseDetailByID
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        getCoursesDetail: (maKhoaHoc) => {
            dispatch(getCoursesDetailAction(maKhoaHoc));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(CourseDetail);
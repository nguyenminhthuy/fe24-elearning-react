import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom';
import InfiniteCarousel from 'react-leaf-carousel';
import CourseItem from './CourseItem';
import { Card } from 'antd';

//connect redux
import { connect } from 'react-redux';
import { getCoursesListAction } from '../../../../redux/actions/ManageCoursesAction';


const options = {
    items: 4,
};

class CourseOwlCarousel extends PureComponent {

    componentDidMount() {
        this.props.getCoursesList();
    }

    renderCourseList() {
        return this.props.courseList.map((courseLst, index) => {
            return (
                <div key={index}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <span>Price: 0 VNĐ</span>,
                            <span>Detail</span>
                        ]}
                    >
                        <div className="desc">
                            <h6>
                                <a href="/course-detail">{courseLst.tenKhoaHoc}</a>
                            </h6>
                            <span>Description</span>
                        </div>
                    </Card>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="mb-5">
                <h2 className="m-5 text-center">Các khóa học phổ biến</h2>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            },
                        },
                    ]}
                    dots={false}
                    showSides={true}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={4}
                    slidesToShow={4}
                    scrollOnDevice={true}
                    loop
                >       
                
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>
                    <div>
                        <CourseItem />
                    </div>

                </InfiniteCarousel>
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
export default connect(mapStateToProps, mapDispatchToProp)(CourseOwlCarousel)

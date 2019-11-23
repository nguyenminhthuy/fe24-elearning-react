import React, { Component } from 'react'
import { Button, Icon, Modal } from 'antd';
import Swal from 'sweetalert2';

//connect redux
import { connect } from 'react-redux';
import { getCoursesListAction } from '../../../../redux/actions/ManageCoursesAction';
import { deleteCourseAction } from '../../../../redux/actions/ManageCoursesAction';
import ModalAddCourse from '../Modal/ModalAddCourse';
import ModalAddUser from '../Modal/ModalAddUser';

class ManageCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addCourseLoading: false,
            addCourseVisible: false
        }
    }

    //Add Course Modal
    showAddCourseModal = () => {
        this.setState({
            addCourseVisible: true,
        });
    };

    handleOkOnAdd = () => {
        this.setState({ addCourseLoading: true });
        setTimeout(() => {
            this.setState({ addCourseLoading: false, addCourseVisible: false });
        }, 3000);
    };

    handleCancelOnAdd = () => {
        this.setState({ addCourseVisible: false });
    };

    componentDidMount() {
        this.props.getCoursesList();
    }

    deleteCourse = (courseID) => {
        Swal.fire({
            title: 'Bạn chắc chắn muốn xóa khóa học này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xác nhận'
        }).then((result) => {
            if (result.value) {
                this.props.deleteCourse(courseID);
            }
        })
    }

    renderAllCourses() {
        return this.props.courseList.map((courseLst, index) => {
            return (
                <tr key={index}>
                    <td>{courseLst.maKhoaHoc}</td>
                    <td>{courseLst.tenKhoaHoc}</td>
                    <td>{courseLst.moTa}</td>
                    <td>{courseLst.luotXem}</td>
                    <td>
                        <img style={{ width: 40, height: 35 }}
                            alt={courseLst.tenKhoaHoc}
                            src={courseLst.hinhAnh}
                        />
                    </td>
                    <td className="text-center">
                        <Button icon="edit" size='small' />&nbsp;&nbsp;
                        <Button type="danger" icon="delete" size='small' onClick={() => this.deleteCourse(courseLst.maKhoaHoc)}/>
                    </td>
                </tr>
            )
        })
    }

    renderAddCourseModal() {
        const { addCourseVisible, addCourseLoading } = this.state;
        return (
            <Modal
                width='50%'
                style={{ top: 20 }}
                visible={addCourseVisible}
                title="Thêm khóa học"
                onOk={this.handleOkOnAdd}
                onCancel={this.handleCancelOnAdd}
                footer={null}
            >
                <ModalAddCourse />
            </Modal>
        )
    }

    render() {
        return (
            <div>
                <Button type="primary" icon="plus" size='large' onClick={this.showAddCourseModal}>
                    Thêm Khóa Học
                </Button>
                <p></p>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr className="text-center thead-dark">
                            <th scope="col">Mã khóa học</th>
                            <th scope="col">Tên khóa học</th>
                            <th scope="col">Mô tả</th>
                            <th scope="col">Lượt xem</th>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderAllCourses()}
                    </tbody>
                </table>
                {this.renderAddCourseModal()}
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
        },
        deleteCourse: (courseID) => {
            dispatch(deleteCourseAction(courseID));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(ManageCourse);
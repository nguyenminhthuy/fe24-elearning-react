import React, { Component } from 'react'
import { Button, Icon, Modal } from 'antd';
import Swal from 'sweetalert2';

//connect redux
import { connect } from 'react-redux';
import { getUserListAction } from '../../../../redux/actions/ManageUserAction';
import { deleteUserAction } from '../../../../redux/actions/ManageUserAction';
import ModalAddUser from '../../UserTemplate/Pages/ModalAddUser';
import ModalUpdateUser from '../../UserTemplate/Pages/ModalUpdateUser';

class ManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addUserLoading: false,
            addUserVisible: false,
            editUserLoading: false,
            editUserVisible: false,
            userInfo: {
                taiKhoan: '',
                matKhau: '',
                hoTen: '',
                soDt: '',
                email: '',
                maLoaiNguoiDung: ''
            }
        }
    }



    //Add User Modal
    showAddUserModal = () => {
        this.setState({
            addUserVisible: true,
        });
    };

    handleOkOnAdd = () => {
        this.setState({ addUserLoading: true });
        setTimeout(() => {
            this.setState({ addUserLoading: false, addUserVisible: false });
        }, 3000);
    };

    handleCancelOnAdd = () => {
        this.setState({ addUserVisible: false });
    };

    //Edit User Modal
    showEditUserModal = (userInfo) => {
        this.setState({
            editUserVisible: true,
            userInfo: {
                taiKhoan: userInfo.taiKhoan,
                matKhau: userInfo.matKhau,
                hoTen: userInfo.hoTen,
                soDt: userInfo.soDt,
                email: userInfo.email,
                maLoaiNguoiDung: ''
            }
        });
    };

    handleOkOnEdit = () => {
        this.setState({ editUserLoading: true });
        setTimeout(() => {
            this.setState({ editUserLoading: false, editUserVisible: false });
        }, 3000);
    };

    handleCancelOnEdit = () => {
        this.setState({ editUserVisible: false });
    };

    componentDidMount() {
        this.props.getUserList();
    }

    deleteUser = (username) => {
        Swal.fire({
            title: 'Bạn chắc chắn muốn xóa người dùng này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa người dùng'
        }).then((result) => {
            if (result.value) {
                this.props.deleteUser(username);
            }
        })
    }

    renderAllUser() {
        return this.props.userList.map((userInfo, index) => {
            return (
                <tr>
                    <td>{userInfo.taiKhoan}</td>
                    <td>{userInfo.hoTen}</td>
                    <td>{userInfo.email}</td>
                    <td>{userInfo.soDt}</td>
                    <td>{userInfo.maLoaiNguoiDung === 'HV' ? 'Học viên' : 'Giáo vụ'}</td>
                    <td className="text-center">
                        <Button icon="edit" size='small'
                            onClick={() => this.showEditUserModal(userInfo)} />&nbsp;&nbsp;
                        <Button type="danger" icon="delete" size='small'
                            onClick={() => this.deleteUser(userInfo.taiKhoan)} />
                    </td>
                </tr>
            )
        })
    }

    renderAddUserModal() {
        const { addUserVisible, addUserLoading } = this.state;
        return (
            <Modal
                width='40%'
                style={{ top: 20 }}
                visible={addUserVisible}
                title="Thêm người dùng"
                onOk={this.handleOkOnAdd}
                onCancel={this.handleCancelOnAdd}
                footer={null}
            >
                <ModalAddUser />
            </Modal>
        )
    }

    renderEditUserModal() {
        const { editUserVisible, editUserLoading, userInfo } = this.state;
        return (
            <Modal
                width='40%'
                style={{ top: 20 }}
                visible={editUserVisible}
                title="Cập nhật người dùng"
                onOk={this.handleOkOnEdit}
                onCancel={this.handleCancelOnEdit}
                footer={null}
            >
                <ModalUpdateUser userInfo={userInfo} />
            </Modal>
        )
    }

    render() {
        return (
            <div>
                <Button type="primary" icon="plus" size='large'
                    onClick={this.showAddUserModal}>
                    Thêm Người Dùng
                </Button>
                <p></p>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr className="text-center thead-dark">
                            <th scope="col">Tài Khoản</th>
                            <th scope="col">Họ Tên</th>
                            <th scope="col">Email</th>
                            <th scope="col">Số Điện Thoại</th>
                            <th scope="col">Loại Người Dùng</th>
                            <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderAllUser()}
                    </tbody>
                </table>
                {this.renderAddUserModal()}
                {this.renderEditUserModal()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userList: state.ManageUserReducer.userList
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        getUserList: () => {
            dispatch(getUserListAction());
        },
        deleteUser: (userAccount) => {
            dispatch(deleteUserAction(userAccount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(ManageUser);
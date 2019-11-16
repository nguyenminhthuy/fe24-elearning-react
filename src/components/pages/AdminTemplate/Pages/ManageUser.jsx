import React, { Component } from 'react'
import { Button, Icon } from 'antd';

//connect redux
import { connect } from 'react-redux';
import { getUserListAction } from '../../../../redux/actions/ManageUserAction';

class ManageUser extends Component {

    componentDidMount() {
        this.props.getUserList();
    }

    renderAllUser() {
        return this.props.userList.map((userInfo, index) => {
            return (
                <tr>
                    <td>{userInfo.taiKhoan}</td>
                    <td>{userInfo.hoTen}</td>
                    <td>{userInfo.email}</td>
                    <td>{userInfo.soDt}</td>
                    <td>{userInfo.maLoaiNguoiDung==='HV'?'Học viên':'Giáo vụ'}</td>
                    <td className="text-center">
                        <Button icon="edit" size='small' />&nbsp;&nbsp;
                            <Button type="danger" icon="delete" size='small' />
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <Button type="primary" icon="plus" size='large'>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(ManageUser);
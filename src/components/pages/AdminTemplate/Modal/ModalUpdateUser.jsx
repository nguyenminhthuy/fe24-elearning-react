import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import { addUserAction } from '../../../../redux/actions/ManageUserAction';
import { settings } from '../../../../config/setting'

const styles = {
    form: {
        textAlign: 'center'
    }
}

class ModalUpdateUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userUpdate: {
                txtUsername: '',
                txtPassword: '',
                txtName: '',
                txtPhone: '',
                txtEmail: '',
                maNhom: '',
                maLoaiNguoiDung: '',
            },
            errors: {
                txtUsername: '',
                txtPassword: '',
                txtName: '',
                txtPhone: '',
                txtEmail: ''
            }
        }
    }

    handleOnChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            userUpdate: { ...this.state.userUpdate, [name]: value }
        }, () => {
            console.log(this.state);
        })
    };

    validateInput = (e) => {
        let { name, value, type } = e.target;
        let errorMessage = '';
        if (value === '') {
            errorMessage = `Vui lòng điền đầy đủ thông tin.`;
        }
        if (type === 'email') {
            let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!pattern.test(value)) {
                errorMessage = 'Email không hợp lệ.';
            }
        }
        if (name === 'txtPhone') {
            let pattern = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            if (!pattern.test(value)) {
                errorMessage = 'Số điện thoại không hợp lệ.';
            }
        }
        this.setState({
            errors: { ...this.state.errors, [name]: errorMessage }
        }, () => {
            // console.log(this.state) 
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        // let userUpdate = {
        //     taiKhoan: this.state.userUpdate.txtUsername,
        //     matKhau: this.state.userUpdate.txtPassword,
        //     hoTen: this.state.userUpdate.txtName,
        //     soDT: this.state.userUpdate.txtPhone,
        //     maNhom: settings.groupID,
        //     email: this.state.userUpdate.txtEmail,
        //     maLoaiNguoiDung: 'HV'
        // }
        // this.props.addUser(userUpdate);
    };

    render() {
        const { userInfo } = this.props;
        return (
            <form style={styles.form} className="ml-3 mr-3" onSubmit={this.handleOnSubmit}>
                <div className='form-group row'>
                    <div className="col-6">
                        <p className="text-left">Tài khoản</p>
                        <input name="txtUsername"
                            onChange={this.handleOnChange}
                            value={this.state.userUpdate.txtUsername}
                            onBlur={this.validateInput}
                            onKeyUp={this.validateInput}
                            onKeyPress={this.validateInput}
                            className='input' type='text'
                            placeholder={userInfo.taiKhoan} />
                    </div>
                    <div className="col-6">
                        <p className="text-left">Mật khẩu</p>
                        <input name="txtPassword"
                            onChange={this.handleOnChange}
                            value={this.state.userUpdate.txtPassword}
                            onBlur={this.validateInput}
                            onKeyUp={this.validateInput}
                            onKeyPress={this.validateInput}
                            className='input' type='password' placeholder='' />
                    </div>
                </div>
                <div className='form-group row'>
                    <div className="col-6">
                        {this.state.errors.txtUsername ?
                            <Alert message={this.state.errors.txtUsername} type="error" /> : ''}
                    </div>
                    <div className="col-6">
                        {this.state.errors.txtPassword ?
                            <Alert message={this.state.errors.txtPassword} type="error" /> : ''}
                    </div>
                </div>
                <div className='form-group row'>
                    <div className="col-6">
                        <p className="text-left">Họ tên</p>
                        <input name="txtName"
                            onChange={this.handleOnChange}
                            value={this.state.userUpdate.txtName}
                            onBlur={this.validateInput}
                            onKeyUp={this.validateInput}
                            onKeyPress={this.validateInput}
                            className='input' type='text'
                            placeholder={userInfo.hoTen} />
                    </div>
                    <div className="col-6">
                        <p className="text-left">Số điện thoại</p>
                        <input name="txtPhone"
                            onChange={this.handleOnChange}
                            value={this.state.userUpdate.txtPhone}
                            onBlur={this.validateInput}
                            onKeyUp={this.validateInput}
                            onKeyPress={this.validateInput}
                            className='input' type='text'
                            placeholder={userInfo.soDT} />
                    </div>
                </div>
                <div className='form-group row'>
                    <div className="col-6">
                        {this.state.errors.txtName ?
                            <Alert message={this.state.errors.txtName} type="error" /> : ''}
                    </div>
                    <div className="col-6">
                        {this.state.errors.txtPhone ?
                            <Alert message={this.state.errors.txtPhone} type="error" /> : ''}
                    </div>
                </div>
                <div className='form-group row'>
                    <div className="col-12">
                        <p className="text-left">Email</p>
                        <input name="txtEmail"
                            onChange={this.handleOnChange}
                            value={this.state.userUpdate.txtEmail}
                            onBlur={this.validateInput}
                            onKeyUp={this.validateInput}
                            onKeyPress={this.validateInput}
                            className='input' type='email' placeholder={userInfo.email} />
                    </div>
                </div>
                <div className='form-group row'>
                    <div className="col-12">
                        {this.state.errors.txtEmail ?
                            <Alert message={this.state.errors.txtEmail} type="error" /> : ''}
                    </div>
                </div>
                <div className='form-group row'>
                    <button className='btn' type='submit'>Cập nhật người dùng</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (userUpdate) => {
            dispatch(addUserAction(userUpdate));
        }
    }
}

export default connect(null, mapDispatchToProps)(ModalUpdateUser);

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

class ModalAddUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userSignUp: {
                txtUsername: '',
                txtPassword: '',
                txtName: '',
                txtPhone: '',
                txtEmail: '',
                maNhom: settings.groupID
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
            userSignUp: { ...this.state.userSignUp, [name]: value }
        }, () => {
            // console.log(this.state);
        })
    };

    validateInput = (e) => {
        let { name, value, type } = e.target;
        let errorMessage = '';
        if (value === '') {
            errorMessage = `Thông tin này là bắt buộc. Vui lòng điền đầy đủ thông tin.`;
        }
        if (type === 'email') {
            let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!pattern.test(value)) {
                errorMessage = 'Email không hợp lệ. Vui lòng kiểm tra dữ liệu.';
            }
        }
        if (name === 'txtPhone') {
            let pattern = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            if (!pattern.test(value)) {
                errorMessage = 'Số điện thoại không hợp lệ. Vui lòng kiểm tra dữ liệu.';
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
        let userInfo = {
            taiKhoan: this.state.userSignUp.txtUsername,
            matKhau: this.state.userSignUp.txtPassword,
            hoTen: this.state.userSignUp.txtName,
            soDT: this.state.userSignUp.txtPhone,
            maNhom: settings.groupID,
            email: this.state.userSignUp.txtEmail,
            maLoaiNguoiDung:'HV'
        }
        this.props.addUser(userInfo);
    };

    render() {
        return (

            <form style={styles.form} className="ml-3 mr-3" onSubmit={this.handleOnSubmit}>
                <div className='form-group row'>
                    <p>Tài khoản</p>
                    <input name="txtUsername"
                        onChange={this.handleOnChange}
                        value={this.state.userSignUp.txtUsername}
                        onBlur={this.validateInput}
                        onKeyUp={this.validateInput}
                        onKeyPress={this.validateInput}
                        className='input' type='text'
                        placeholder='Tài khoản' />
                </div>
                <div className='form-group row'>
                    {this.state.errors.txtUsername ?
                        <Alert message={this.state.errors.txtUsername} type="error" /> : ''}
                </div>
                <div className='form-group row'>
                    <p>Mật khẩu</p>
                    <input name="txtPassword"
                        onChange={this.handleOnChange}
                        value={this.state.userSignUp.txtPassword}
                        onBlur={this.validateInput}
                        onKeyUp={this.validateInput}
                        onKeyPress={this.validateInput}
                        className='input' type='password' placeholder='Mật khẩu' />
                </div>
                <div className='form-group row'>
                    {this.state.errors.txtPassword ?
                        <Alert message={this.state.errors.txtPassword} type="error" /> : ''}
                </div>
                <div className='form-group row'>
                    <p>Họ tên</p>
                    <input name="txtName"
                        onChange={this.handleOnChange}
                        value={this.state.userSignUp.txtName}
                        onBlur={this.validateInput}
                        onKeyUp={this.validateInput}
                        onKeyPress={this.validateInput}
                        className='input' type='text'
                        placeholder='Họ tên' />
                </div>
                <div className='form-group row'>
                    {this.state.errors.txtName ?
                        <Alert message={this.state.errors.txtName} type="error" /> : ''}
                </div>
                <div className='form-group row'>
                    <p>Số điện thoại</p>
                    <input name="txtPhone"
                        onChange={this.handleOnChange}
                        value={this.state.userSignUp.txtPhone}
                        onBlur={this.validateInput}
                        onKeyUp={this.validateInput}
                        onKeyPress={this.validateInput}
                        className='input' type='text'
                        placeholder='Số điện thoại' />
                </div>
                <div className='form-group row'>
                    {this.state.errors.txtPhone ?
                        <Alert message={this.state.errors.txtPhone} type="error" /> : ''}
                </div>
                <div className='form-group row'>
                    <p>Email</p>
                    <input name="txtEmail"
                        onChange={this.handleOnChange}
                        value={this.state.userSignUp.txtEmail}
                        onBlur={this.validateInput}
                        onKeyUp={this.validateInput}
                        onKeyPress={this.validateInput}
                        className='input' type='email' placeholder='Email' />
                </div>
                <div className='form-group row'>
                    {this.state.errors.txtEmail ?
                        <Alert message={this.state.errors.txtEmail} type="error" /> : ''}
                </div>
                <div className='form-group row'>
                    <button className='btn' type='submit'>Thêm người dùng</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (userInfo) => {
            dispatch(addUserAction(userInfo));
        }
    }
}

export default connect(null, mapDispatchToProps)(ModalAddUser);

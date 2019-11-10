import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import { signUpAction } from '../../../../redux/actions/ManageUserAction';
import { settings } from '../../../../config/setting'

const styles = {
    form: {
        textAlign: 'center'
    }
}

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userSignUp: {
                txtUsername: '',
                txtPassword: '',
                txtName: '',
                txtPhone: '',
                txtEmail: '',
                maLoaiNguoiDung: "HV",
                maNhom:"GP01"
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
        console.log(this.state.userSignUp);
        // let userSignUp={
        //     taiKhoan:"this.state.userSignUp.txtUsername.value",
        //     matKhau:this.state.userSignUp.txtPassword.value,
        //     hoTen:this.state.userSignUp.txtName.value,
        //     soDT:this.state.userSignUp.txtPhone.value,
        //     maLoaiNguoiDung:this.state.userSignUp.maLoaiNguoiDung,
        //     maNhom:settings.groupID,
        //     email:this.state.userSignUp.txtEmail.value
        // }
        this.props.signUp(this.state.userSignUp);
    };

    render() {
        // if (localStorage.getItem('token')) {
        //     return <Redirect to='/' />;
        // }
        // else {
            return (
                <div className="register-frm">
                    <div className="container">
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-md-6">
                                <form style={styles.form} onSubmit={this.handleOnSubmit}>
                                    <h3>Đăng ký tài khoản</h3>
                                    <p className="mb-5 mt-3">Chào mừng tới Elearning!</p>
                                    <div className='form-group row'>
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
                                        <button className='btn' type='submit'>Đăng ký</button>
                                    </div>
                                </form>
                                <p>Bạn đã có tài khoản?
                                    <a href="/login">&nbsp;Đăng nhập</a>
                                </p>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                </div>
            )
        // }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (userSignUp) => {
            dispatch(signUpAction(userSignUp));
        }
    }
}

export default connect(null,mapDispatchToProps)(Register);

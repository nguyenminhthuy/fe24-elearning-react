import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Alert } from 'antd';

const styles = {
    form: {
        textAlign: 'center'
    }
}

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accountInfo: {
                txtUsername: '',
                txtPassword: '',
                txtName: '',
                txtPhone: '',
                txtEmail: '',
                maLoaiNguoiDung:'HV'
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
            accountInfo: { ...this.state.accountInfo, [name]: value }
        }, () => {
            console.log(this.state);
        })
    };

    validateInput = (e) => {
        let { name, value, type } = e.target;
        let errorMessage = '';
        if (value === '') {
            errorMessage = `Thông tin này là bắt buộc. Vui lòng điền đầy đủ thông tin.`;
        }
        if (type === 'email') {
            var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!pattern.test(value)) {
                errorMessage = 'Email không hợp lệ. Vui lòng kiểm tra dữ liệu.';
            }
        }
        if (name === 'txtPhone') {
            var pattern = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            if (!pattern.test(value)) {
                errorMessage = 'Số điện thoại không hợp lệ. Vui lòng kiểm tra dữ liệu.';
            }
        }
        this.setState({
            errors: { ...this.state.errors, [name]: errorMessage }
        }, () => { console.log(this.state) })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!');
    };

    render() {
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
                                        value={this.state.accountInfo.txtUsername}
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
                                        value={this.state.accountInfo.txtPassword}
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
                                        value={this.state.accountInfo.txtName}
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
                                        value={this.state.accountInfo.txtPhone}
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
                                        value={this.state.accountInfo.txtEmail}
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
    }
}

class Form extends React.Component {
    render() {
        const { children, title } = this.props
        return (
            <div className='col-md-6 mx-auto'>
                <header>
                    <h1>{title}</h1>
                </header>
                {children}
            </div>
        )
    }
}


// ReactDOM.render(
//     <Form children={<Register />} />,
//     document.getElementById('root')
// );

export default Register;

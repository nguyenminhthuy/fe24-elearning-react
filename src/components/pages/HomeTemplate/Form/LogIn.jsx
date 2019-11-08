import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Alert } from 'antd';
import { loginAction } from '../../../../redux/actions/ManageUserAction';
import {connect} from 'react-redux';

const styles = {
    form: {
        textAlign: 'center'
    }
}

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accountInfo: {
                txtUsername: '',
                txtPassword: ''
            },
            errors: {
                txtUsername: '',
                txtPassword: ''
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
        this.setState({
            errors: { ...this.state.errors, [name]: errorMessage }
        }, () => { console.log(this.state) })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.accountInfo);
        console.log(this.state.accountInfo);
    };

    render() {
        return (
            <div className="login-frm">
                <div className="container">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-md-6">
                            <form style={styles.form} onSubmit={this.handleOnSubmit}>
                                <h3>Đăng nhập</h3>
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
                                    <button className='btn' type='submit'>Đăng nhập</button>
                                </div>
                            </form>
                            <p>Bạn chưa có tài khoản
                                <a href="/register">&nbsp;Đăng ký</a>
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

const mapDispatchToProps = (dispatch) => {
    return {
      login: (accountInfo) => {
        dispatch(loginAction(accountInfo));
      }
    }
  }

  
// ReactDOM.render(
//     <Form children={<Login />} />,
//     document.getElementById('root')
// );

export default connect(null,mapDispatchToProps)(Login);
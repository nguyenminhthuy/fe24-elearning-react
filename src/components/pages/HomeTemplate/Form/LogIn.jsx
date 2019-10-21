import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';

const styles = {
    form: {
        textAlign: 'center'
    }
}

class Login extends React.Component {
    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!');
    };
    render() {
        return (
            <div className="login-frm">
                <div className="container">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-md-6">
                            <form style={styles.form} onSubmit={this.handleOnSubmit}>
                                <h3>Log In</h3>
                                <p>Welcome back! Enter your username and password to log in</p>
                                <div className='form-group row'>
                                    <input className='input' type='text' placeholder='Username' />
                                </div>
                                <div className='form-group row'>
                                    <input className='input' type='password' placeholder='Password' />
                                </div>
                                <div className='form-group row'>
                                    <button className='btn' type='submit'>Log In</button>
                                </div>
                            </form>
                            <p>Don't have an account?
                                <a href="/register">&nbsp;Sign Up</a>
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
//     <Form children={<Login />} />,
//     document.getElementById('root')
// );

export default Login;

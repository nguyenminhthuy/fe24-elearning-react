import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';

const styles = {
    form: {
        textAlign: 'center'
    }
}

class Register extends React.Component {
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
                                <h3>Create an account</h3>
                                <p>Welcome to Elearning</p>
                                <div className='form-group row'>
                                    <input className='input' type='text' placeholder='Username' />
                                </div>
                                <div className='form-group row'>
                                    <input className='input' type='password' placeholder='Password' />
                                </div>
                                <div className='form-group row'>
                                    <input className='input' type='text' placeholder='Name' />
                                </div>
                                <div className='form-group row'>
                                    <input className='input' type='text' placeholder='Email' />
                                </div>
                                <div className='form-group row'>
                                    <input className='input' type='text' placeholder='Phone number' />
                                </div>
                                <div className='form-group row'>
                                    <button className='btn' type='submit'>Log In</button>
                                </div>
                            </form>
                            <p>Already have an account?
                                <a href="/login">&nbsp;Log In</a>
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

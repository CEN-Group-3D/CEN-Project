import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='login-panel panel container col-xs-12 col-md-3'>
            <h2 id="login-header">Welcome back</h2>
            <form className="login-form">
                <div className="login-field">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username"></input>
                </div>
                <div className="login-field">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"></input>
                </div>
                <button className="btn btn-primary">Log in</button>
            </form>
        </div>
    );
}

export default Login;

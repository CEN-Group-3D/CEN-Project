import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='panel container col-xs-12 col-md-3'>
            <h2>Welcome back</h2>
            <form className="login-form">
                <label for="username">Username:
                    <input type="text" id="username" name="username"></input>
                </label>
                <label for="password">Password:
                    <input type="password" id="password" name="password"></input>
                </label>
                <button className="btn btn-primary">Log in</button>
            </form>
        </div>
    );
}

export default Login;

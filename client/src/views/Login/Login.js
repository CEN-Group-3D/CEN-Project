import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    
    handleLogin = (evt) => {
        evt.preventDefault();
        let username = evt.target.username.value;
        let password = evt.target.password.value;
        
        let loginData = new FormData();
        loginData.append('username', username);
        loginData.append('password', password);
        fetch('/login', {
            method: 'POST',
            body: loginData,
        })
    }

    render() {
        return (
            <div className='login-panel panel container col-xs-12 col-md-3'>
                <h2 id="login-header">Welcome back</h2>
                <form  method="POST" className="login-form">
                    <div className="login-field">
                        <label for="username">Email</label>
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
}

export default Login;

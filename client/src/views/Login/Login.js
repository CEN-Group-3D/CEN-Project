import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
        };
    }
    
    handleLogin = (evt) => {
        evt.preventDefault();
        let username = evt.target.username.value;
        let password = evt.target.password.value;
        
        let loginData = {username, password}
        
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            
        }).then((response) => {
            this.setState({error: false});
            if (response.ok) {
                window.location = response.url;
            } else {
                this.setState({error: true});
            }
        })
    }

    render() {
        return (
            <div className='login-panel panel container col-xs-12 col-md-3'>
                <h2 id="login-header">Welcome back</h2>
                <form onSubmit={this.handleLogin} method="POST" className="login-form">
                    {
                        this.state.error ? 
                            <div className="alert alert-danger">The email and/or password is incorrect!</div> : 
                            null
                    }
                    <div className="form-group login-field">
                        <label for="username">Email</label>
                        <input required className={`${this.state.error ? 'is-invalid' : ''} form-control`} type="text" id="username" name="username"></input>
                    </div>
                    <div className="form-group login-field">
                        <label for="password">Password</label>
                        <input required className={`${this.state.error ? 'is-invalid' : ''} form-control`} type="password" id="password" name="password"></input>
                    </div>
                    <button className="btn btn-primary">Log in</button>
                </form>
            </div>
        );
    }
}

export default Login;

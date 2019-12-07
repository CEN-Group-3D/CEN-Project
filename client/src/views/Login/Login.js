import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onSuccessfulLogin } from '../../actions/authActions';
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
        
        fetch('/user/login', {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            
        }).then((response) => {
            this.setState({error: false});
            if (response.ok) {
                this.props.onSuccessfulLogin();
                return response.json()
            } else {
                this.setState({error: true});
            }
        }).then((data) => {
            if (data) {
                if (data.admin) {
                    window.location = '/admin_dashboard';
                } else if (data.first_log) {
                    window.location = '/welcome';
                } else {
                    window.location = '/dashboard';
                }
            }
        })
    }

    render() {
        return (
            <div className='panel panel-center container' id="login-panel">
                <h2 className="panel-title">Welcome back</h2>
                <div className="panel-content">
                    <form onSubmit={this.handleLogin} method="POST" className="login-form">
                        {
                            this.state.error ? 
                                <div className="alert alert-danger">The email and/or password is incorrect!</div> : 
                                null
                        }
                        <div className="form-group login-field">
                            <label s="username">Email</label>
                            <input required className={`${this.state.error ? 'is-invalid' : ''} form-control`} type="text" id="username" name="username"></input>
                        </div>
                        <div className="form-group login-field">
                            <label s="password">Password</label>
                            <input required className={`${this.state.error ? 'is-invalid' : ''} form-control`} type="password" id="password" name="password"></input>
                        </div>
                        <button className="col-12 btn btn-primary">Log in</button>                   
                    </form>
                    <p className="register-text text-center">Don't have an account? <a href="/register">Register.</a></p>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    onSuccessfulLogin: PropTypes.func.isRequired,
};

export default connect(null, { onSuccessfulLogin })(Login);

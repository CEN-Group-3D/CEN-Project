import React from 'react';
import './Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    checkInput = () => {

    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        evt.target.classList.add('was-validated');
    }

    render() {
        return (
            <div className='panel container' id="login-panel">
                <h2 id="login-header">Create an account</h2>
                <form onSubmit={this.handleSubmit} method="POST" className="login-form needs-validation" noValidate>
                    {/* {
                        this.state.error ? 
                            <div className="alert alert-danger">The email and/or password is incorrect!</div> : 
                            null
                    } */}
                    <div className="form-group login-field">
                        <label htmlFor="name">Name</label>
                        <input required placeholder="First and last name" required className="form-control" type="text" id="name" name="name"></input>
                        <div className="invalid-feedback">Please provide a first and last name.</div>
                    </div>
                    <div className="form-group login-field">
                        <label htmlFor="email">Email</label>
                        <input required className="form-control" type="text" id="email" name="email"></input>
                        <div className="invalid-feedback">Please provide a valid email.</div>
                    </div>
                    <div className="form-group login-field">
                        <label htmlFor="password">Password</label>
                        <input required minLength="6" className="form-control" type="password" id="password" name="password"></input>
                        <div className="invalid-feedback">Please provide a valid password.</div>
                        <small className="form-text text-muted">
                            Your password must have at least 6 characters
                        </small>
                    </div>
                    <div className="form-group login-field">
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input required minLength="6" className="form-control" type="password" id="confirm-password" name="confirm-password"></input>
                        <div className="invalid-feedback">Please confirm your password.</div>
                    </div>
                    <button className="col-12 btn btn-primary">Register</button>                   
                </form>
                <p className="register-text text-center">Already have an account? <a href="/login">Login.</a></p>
            </div>
        )
    }
}

export default Register;
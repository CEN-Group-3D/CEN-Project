import React from 'react';
import './Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            passwordError: 'Please provide a valid password.',
            emailError: 'Please provide a valid email.'
        };
    }

    checkEmail = (email) => {
        return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email);
    }

    checkInput = (evt) => {
        let form = evt.target.form;

        let confirmPasswordInput = form.elements.confirmPassword;
        let passwordInput = form.elements.password;
        let emailInput = form.elements.email;

        let passwordMatch = confirmPasswordInput.value === passwordInput.value;
        
        confirmPasswordInput.setCustomValidity(!passwordMatch ? "Passwords do not match." : "")
        if (!passwordMatch) {
            this.setState({passwordError: 'The passwords do not match.'});
        } else {
            this.setState({passwordError: 'Please provide a valid password.'});
        }

        let validEmail = this.checkEmail(emailInput.value);
        emailInput.setCustomValidity(!validEmail ? "Your email is not valid." : "");

    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        let form = evt.target;
        let isFormValid = form.checkValidity();

        form.email.classList.remove('is-invalid');
        this.setState({
            emailError: 'Please provide a valid email',
        });

        form.classList.add('was-validated');
        
        if (!isFormValid) {
            return false;
        }
        let email = form.email.value;
        let password = form.password.value;
        let name = form.name.value;
        
        let registerData = {name, password, email}
        
        fetch('/user/register', {
            method: 'POST',
            body: JSON.stringify(registerData),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then((response) => {
            if (response.ok) {
                window.location = '/login';
            } else if (response.status === 409) {
                form.email.classList.add('is-invalid');
                this.setState({
                    emailError: 'Email is already in use.'
                })
                // Handles if user already exists
            }
        }).catch((err) => {
            console.error(err);
        })
    }

    render() {
        return (
            <div className='panel container' id="login-panel">
                <h2 id="login-header">Create an account</h2>
                <form onInput={this.checkInput} onSubmit={this.handleSubmit} method="POST" className="login-form" noValidate>
                    {/* {
                        this.state.error ? 
                            <div className="alert alert-danger">The email and/or password is incorrect!</div> : 
                            null
                    } */}
                    <div className="form-group login-field">
                        <label htmlFor="name">Name</label>
                        <input required placeholder="First and last name" className="form-control" type="text" id="name" name="name"></input>
                        <div className="invalid-feedback">Please provide a first and last name.</div>
                    </div>
                    <div className="form-group login-field">
                        <label htmlFor="email">Email</label>
                        <input required className="form-control" type="text" id="email" name="email"></input>
                        <div className="invalid-feedback">{this.state.emailError}</div>
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
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input required minLength="6" className="form-control" type="password" id="confirmPassword" name="confirmPassword"></input>
                    <div className="invalid-feedback">{this.state.passwordError}</div>
                    </div>
                    <button className="col-12 btn btn-primary">Register</button>                   
                </form>
                <p className="register-text text-center">Already have an account? <a href="/login">Login.</a></p>
            </div>
        )
    }
}

export default Register;
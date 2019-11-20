import React from 'react';
import './UpdateUser.css';

class UpdateUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleUpdate = (evt) => {
        evt.preventDefault();

        let username = evt.target.name.value;
        let email = evt.target.email.value;
        
        fetch('/user/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email}),
            credentials: 'include',
        }).then((response) => {
            if (response.status === 200) {
                console.log('successful update');
            } else {
                console.log('unsuccessful update');
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleUpdate} id="update-profile-form">
                    <h4>Update your profile</h4>
                    <div className="form-group login-field">
                        <label htmlFor="username">Name</label>
                        <input className="form-control" type="text" id="name" name="name"></input>
                    </div>
                    <div className="form-group login-field">
                        <label htmlFor="username">Email</label>
                        <input className="form-control" type="text" id="email" name="email"></input>
                    </div>
                    <button className="btn btn-primary">Update profile</button>
                </form>
            </React.Fragment>
        )
    }
}

export default UpdateUser;
import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-xl">
                <ul className="navbar-nav">
                    <li>
                        <a className="navbar-brand" href="#">Logo</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                </ul>
                { !this.props.isLoggedIn ? 
                    <ul className="navbar-nav navbar-right navbar-buttons">
                        <li>
                            <a href="/login" className="btn btn-outline-primary">Login</a>
                        </li>
                        <li>
                            <a href="/register" className="btn btn-primary">Sign up</a>
                        </li>
                    </ul>
                :
                    null
                }
            </nav>
        )   
    }
}

export default Header;

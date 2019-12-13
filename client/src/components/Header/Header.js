import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';


class Header extends React.Component {
    
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
                            <a href="/login" className="btn btn-outline-brand-1">Login</a>
                        </li>
                        <li>
                            <a href="/register" className="btn btn-brand-1">Sign up</a>
                        </li>
                    </ul>
                :
                    null
                }
            </nav>
        )   
    }
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
    return {isLoggedIn: state.isLoggedIn}
};

export default connect(mapStateToProps, {})(Header);

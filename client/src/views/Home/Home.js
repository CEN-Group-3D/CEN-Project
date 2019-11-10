import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    </a>
                </header>
            </div>
        );
    }
}

export default Home;

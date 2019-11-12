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
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Welcome to EstatePlanR</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

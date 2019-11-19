import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    
    render() {
        return (
            <div className='panel container col-xs-12 col-md-3'>
                <h1>Welcome to EstatePlanR.</h1>
                <form action="/plans">
                    <div id="question-field" className="form-group">
                        <label for="estate-plans">Do you already have any estate plans?</label>
                        <select className="form-control" name="estate-plans">
                            <option value="none">No</option>
                            <option value="poa">Power of Attorney</option>
                            <option value="lwill">Living Will</option>
                            <option value="will">Will</option>
                            <option value="trust">Trust</option>
                        </select>
                    </div>
                    <button className="btn btn-primary">Continue</button>
                </form>
            </div>
        );
    }
}

export default Welcome;

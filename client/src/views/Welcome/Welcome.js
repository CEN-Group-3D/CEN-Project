import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    
    render() {
        return (
            <div className='panel panel-center container col-xs-12 col-md-3'>
                <h3 className='panel-title'>Welcome to EstatePlanR</h3>
                <div className='panel-content'>
                    <form action="/payments" method="GET">
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
                        <div className="text-right">
                            <button className="btn btn-primary pull-right">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Welcome;

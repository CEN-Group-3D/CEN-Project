import React from 'react';
import './FormView.css';

class FormView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="col-xs-12 col-md-6">
                <form className="container">
                    <h1>Personal and Family</h1>
                    <div className="panel col-xs-12">
                        <div className="form-entry">
                            <label for="fname">First Name</label>
                            <input id="fname" type="text"></input>
                        </div>
                        <div className="form-entry">
                            <label for="mname">Middle Initial</label>
                            <input id="mname" type="text"></input>
                        </div>
                        <div className="form-entry">
                            <label for="lname">Last Name</label>
                            <input id="lname" type="text"></input>
                        </div>
                        <div className="form-entry">
                            <label for="dob">First Name</label>
                            <input id="dob" type="date"></input>
                        </div>
                        <div className="form-entry">
                            <label for="gender">Gender</label>
                            <select id="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="transgender">Transgender</option>
                                <option value="gender-neutral">Gender Neutral</option>
                            </select>
                        </div>
                        <div className="form-entry">
                            <label for="marital-status">Marital Status</label>
                            <select i="marital-status">
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="divorced">Divorced</option>
                                <option value="widowed">Widowed</option>
                            </select>
                        </div>
                    </div> 
                </form>
            </div>
        );
    }
}

export default FormView;

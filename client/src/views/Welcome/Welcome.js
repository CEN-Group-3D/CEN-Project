import React from 'react';
import './Welcome.css';

function Welcome() {
    return (
        <div className='panel container col-xs-12 col-md-3'>
            <h1>Welcome to EstatePlanR!</h1>
            <form>
                <div id="question-field">
                    <label for="estate-plans">Do you have any estate plans?</label>
                    <select name="estate-plans">
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

export default Welcome;

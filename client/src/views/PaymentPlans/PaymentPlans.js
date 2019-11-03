import React from 'react';
import Redirect from 'react';
import './PaymentPlans.css';

function PaymentPlans() {
    return (
        <div className="plans-container container col-xs-12 col-md-7">
            <div className="row">
                <div className='col-xs-12 col-md-4'>
                    <div className="panel plan-container">
                        <h3>Simple</h3>
                        <span className="currency">$</span><span className="price">10</span><span className="period">/mo</span>
                        <ul className="featuers-list">
                            <li>Short desc of feature</li>
                            <li>Short desc of feature</li>
                            <li>Short desc of feature</li>
                            <li>Short desc of feature</li>
                        </ul>
                        <button className="btn btn-outline-primary">Select this plan</button>
                    </div>
                </div>
                <div className='col-xs-12 col-md-4'>
                    <div className="panel plan-container">
                        <h3>Advanced</h3>
                        <span className="currency">$</span><span className="price">20</span><span className="period">/mo</span>
                        <ul className="featuers-list">
                            <li>Short desc of feature</li>
                            <li>Short desc of feature</li>
                            <li>Short desc of feature</li>
                            <li>Short desc of feature</li>
                        </ul>
                        <button className="btn btn-primary">Select this plan</button>
                    </div>
                </div>
                <div className='col-xs-12 col-md-4'>
                    <div className="panel plan-container">
                        <h3>Comprehensive</h3>
                        <span className="currency">$</span><span className="price">30</span><span className="period">/mo</span>
                        <ul className="featuers-list">
                            <li>Short desc of feature</li>
                            <li>Short desc of feature</li>
                            <li>Short desc of feature</li>
                            <li>Short desc of feature</li>
                        </ul>
                        <button className="btn btn-primary">Select this plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPlans;

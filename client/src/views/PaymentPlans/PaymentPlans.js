import React from 'react';
import './PaymentPlans.css';

class PaymentPlans extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div className="plans-container container col-xs-12 col-sm-7 col-md-5 col-lg-12 col-xl-10">
                <div className="row">
                    <div className='col-xs-12 col-md-12 col-lg-4'>
                        <div className="panel plan-container">
                            <div className="panel-title panel-title-baseline">
                                <h4>Simple</h4>
                                <div className="price-container">
                                    <span className="currency">$</span><span className="price">20</span><span className="period">/mo</span>
                                </div>                            
                            </div>
                            <div className="panel-content">
                                <ul className="features-list">
                                    <li>Short desc of feature</li>
                                    <li>Short desc of feature</li>
                                    <li>Short desc of feature</li>
                                    <li>Short desc of feature</li>
                                </ul>
                                <button className="btn btn-outline-primary">Select this plan</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-md-12 col-lg-4'>
                        <div className="panel plan-container">
                            <div className="panel-title panel-title-baseline">
                                <h4>Advanced</h4>
                                <div className="price-container">
                                    <span className="currency">$</span><span className="price">20</span><span className="period">/mo</span>
                                </div>
                            </div>
                            <div className="panel-content">
                                <ul className="features-list">
                                    <li>Short desc of feature</li>
                                    <li>Short desc of feature</li>
                                    <li>Short desc of feature</li>
                                    <li>Short desc of feature</li>
                                </ul>
                                <button className="btn btn-primary">Select this plan</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-md-12 col-lg-4'>
                        <div className="panel plan-container">
                            <div className="panel-title panel-title-baseline">
                                <h4>Comprehensive</h4>
                                <div className="price-container">
                                    <span className="currency">$</span><span className="price">20</span><span className="period">/mo</span>
                                </div>                            
                            </div>
                            <div className="panel-content">
                                <ul className="features-list">
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
            </div>
        );
    }
}

export default PaymentPlans;

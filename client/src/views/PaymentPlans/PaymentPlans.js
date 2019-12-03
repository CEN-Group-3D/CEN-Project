import React from 'react';
import './PaymentPlans.css';

class PaymentPlans extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    postPaymentDetails = (payment, planPurchased) => {
        let paymentObject = {
            plan: planPurchased,
            payment: payment
        };
        
        fetch('/user/form', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(paymentObject)
        }).then((response) => {
            console.log(response)
        })
    }
    
    componentDidMount() {
        
        let onSimplePurchase = (payment) => {
            console.log("Simple", payment);
            this.postPaymentDetails(payment, 1);
        }
        
        let onAdvancedPurchase = (payment) => {
            console.log("Advanced", payment);
            this.postPaymentDetails(payment, 2);
        }
    
        let onComprehensivePurchase = (payment) => {
            console.log("Comprehensive", payment);
            this.postPaymentDetails(payment, 3);
        }
        const paypal = window.paypal;

        paypal.Buttons({
            // Set up the transaction
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '10'
                        }
                    }]
                });
            },

            // Finalize the transaction
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    // Show a success message to the buyer
                    onSimplePurchase();
                });
            },

            style: {
                layout: 'horizontal',
                tagline: false
            }


        }).render('#simple-btn');

        paypal.Buttons({
            // Set up the transaction
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '20'
                        }
                    }]
                });
            },

            // Finalize the transaction
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    // Show a success message to the buyer
                    onAdvancedPurchase();
                });
            },

            style: {
                layout: 'horizontal',
                tagline: false
            }


        }).render('#advanced-btn');

        paypal.Buttons({
            // Set up the transaction
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '30'
                        }
                    }]
                });
            },

            // Finalize the transaction
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    // Show a success message to the buyer
                    onComprehensivePurchase();
                });
            },

            funding: {
                disallowed: [paypal.FUNDING.CREDIT]
            },
            style: {
                label: 'paypal',
                layout: 'horizontal',
                tagline: false,
            }


        }).render('#comprehensive-btn');
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
                                    <span className="currency">$</span><span className="price">10</span><span className="period">/mo</span>
                                </div>                            
                            </div>
                            <div className="panel-content">
                                <ul className="features-list">
                                    <li>Short desc of feature</li>
                                    <li>Short desc of feature</li>
                                    <li>Short desc of feature</li>
                                    <li>Short desc of feature</li>
                                </ul>

                            <div id="simple-btn"></div>
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

                                <div id="advanced-btn">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-md-12 col-lg-4'>
                        <div className="panel plan-container">
                            <div className="panel-title panel-title-baseline">
                                <h4>Comprehensive</h4>
                                <div className="price-container">
                                    <span className="currency">$</span><span className="price">30</span><span className="period">/mo</span>
                                </div>                            
                            </div>
                            <div className="panel-content">
                                <ul className="features-list">
                                    <li>Short desc of feature</li>
                                    <li>Short desc of feature</li>
                                    <li>Short desc of feature</li>
                                    <li>Short desc of feature</li>
                                </ul>

                                <div id="comprehensive-btn">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaymentPlans;
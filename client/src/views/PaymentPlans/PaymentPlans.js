import React from 'react';
import './PaymentPlans.css';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class PaymentPlans extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        const style = {
            size: 'small',
            color: 'gold',
            shape: 'rect',
            label: 'paypal',
            tagline: 'false',
        }

        const onSuccess = (payment) => {
            		console.log("Payment successful!", payment);
            		// You can bind the "payment" object's value to your state or props
		}

		const onCancel = (data) => {
			console.log('Payment cancelled!', data);
		}

		const onError = (err) => {
			console.log("Error!", err);
			// Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
        }
		let env = 'production'; // you can set this string to 'production'
		let currency = 'USD'; // you can set this string from your props or state  
		let total = '1';  // this is the total amount (based on currency) to charge

		const client = {
			sandbox:    process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
			production: process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION,
		}
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
                                <PaypalExpressBtn 
                                style={style}
                                env={env} 
                                client={client} 
                                currency={currency} 
                                total={total}  
                                onError={onError} 
                                onSuccess={onSuccess} 
                                onCancel={onCancel} />
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
                                <PaypalExpressBtn 
                                style={style}
                                env={env} 
                                client={client} 
                                currency={currency} 
                                total={total}  
                                onError={onError} 
                                onSuccess={onSuccess} 
                                onCancel={onCancel} />
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
                                <PaypalExpressBtn 
                                style={style}
                                env={env} 
                                client={client} 
                                currency={currency} 
                                total={total}  
                                onError={onError} 
                                onSuccess={onSuccess} 
                                onCancel={onCancel} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaymentPlans;
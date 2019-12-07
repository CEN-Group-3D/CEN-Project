import React from 'react';
import PropTypes from 'prop-types'

class FormPOA extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 
		}
	}

	render() {
		return (
			<div>		
				<h2 className="text-center">Power Of Attorney - Limited</h2>
				<hr></hr>
				<p>I, <u>{this.props.personal.name}, {this.props.personal.address}</u>, the undersigned, hereby appoint and make <u>{this.props.agent.name}, {this.props.agent.address}</u> as my attorney­-in-­fact who shall have full power and authority to represent me and act on my behalf for ONLY the following matters:</p>
				<ol>
					{
						this.props.poaMatters.map((matter, index) => {
							return (
								<li>{matter}</li>
							)
						})
					}
				</ol>
				<p>This Power of Attorney shall be effective on the date of <u>{this.props.personal.effective_Date}</u>, unless it revoked sooner. This Power of Attorney may be revoked by me at any time or in any manner.</p>
				<p>This Power of Attorney <u>{this.props.personal.effective_After}</u> continue to be effective in the event of me getting incapacitated.</p>
				<p>This Power of Attorney shall be governed by the State of <u>{this.props.personal.state}</u>. Signed this <u>{this.props.personal.signed_Day}</u> day of <u>{this.props.personal.signed_Month}</u>, <u>{this.props.personal.signed_Year}</u>.</p>
				<p>({this.props.personal.signature})</p>
				<p>Social Security number: {this.props.personal.SSN}</p>
				<p>State of <u>{this.props.personal.state}</u>, <u>United States</u></p>
			</div>
		)
	}
}

FormPOA.propTypes = {
	personal: PropTypes.object,
}

export default FormPOA;


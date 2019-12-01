import React, { Component } from 'react';
import {PrivateProfile} from "../UserProfile/PrivateProfile";
export let POA = 
	<div>		
		<h1>Power Of Attorney - Limited</h1>
		<p>I, <u>{PrivateProfile.name} And {PrivateProfile.address}</u>, the undersigned, hereby appoint and make [Agent's Name And Address] as my attorney-in-fact who shall have full power and authority to represent me and act on my behalf for ONLY the following matters:</p>
		<p>I, <u>{PrivateProfile.name} And {PrivateProfile.address}</u>, the undersigned, hereby appoint and make <u>{PrivateProfile.agent} And {PrivateProfile.agent_Address}</u> as my attorney­in­fact who shall have full power and authority to represent me and act on my behalf for ONLY the following matters:</p>
		<p><u>{PrivateProfile.POA_Matters.one} </u></p>
		<p><u>{PrivateProfile.POA_Matters.two }</u></p>
		<p><u>{PrivateProfile.POA_Matters.three} </u></p>
		<p><u>{PrivateProfile.POA_Matters.four }</u></p>
		<p>This Power of Attorney shall be effective on the date of <u>{PrivateProfile.effective_Date}</u>, unless it revoked sooner. This Power of Attorney may be revoked by me at any time or in any manner.</p>
		<p>This Power of Attorney <u>{PrivateProfile.effective_After}</u> continue to be effective in the event of me getting incapacitated.</p>
		<p>This Power of Attorney shall be governed by the State of <u>{PrivateProfile.state}</u>. Signed this <u>{PrivateProfile.signed_Day}</u> day of <u>{PrivateProfile.signed_Month}</u>, <u>{PrivateProfile.signed_Year}</u>.</p>
		<p>({PrivateProfile.signature})</p>
		<p>Social Security number: {PrivateProfile.SSN}</p>
		<p>State of <u>{PrivateProfile.state}</u>, <u>{PrivateProfile.country}</u></p>
	</div>


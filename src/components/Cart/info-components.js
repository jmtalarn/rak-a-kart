import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ShippingInfo = ({ updateInfoField }) => {
	return (
		<div className="shipping-info">
			<Info updateInfoField={updateInfoField} />
			<Shipping updateInfoField={updateInfoField} />
		</div>
	);
};

const Info = ({ updateInfoField }) => {
	return (
		<div className="info form">
			<h4>Personal Info</h4>
			<label className="half">
				<span className="label">Name</span>
				<input
					type="text" name="personal.name" placeholder="p.e. John"
					onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value); }}
				/>
			</label>
			<label className="half">
				<span className="label">Surname</span>
				<input
					type="text" name="personal.surname" placeholder="p.e. Doe"
					onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value); }}
				/>
			</label>
			<label className="full">
				<span className="label">Mail address</span>
				<input
					type="text" name="personal.email" placeholder="p.e. john.doe@thedoes.com"
					onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value); }}
				/>
			</label>
		</div>
	);
};

const Shipping = ({ updateInfoField }) => {
	return (
		<div className="shipping form">
			<h4>Shipping info</h4>
			<label className="half">
				<span className="label">Country</span>
				<input
					type="text" name="shipping.country" placeholder="p.e. Italy"
					onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value); }}
				/>
			</label>
			<label className="half">
				<span className="label">City</span>
				<input
					type="text" name="shipping.city" placeholder="p.e. Rome"
					onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value); }}
				/>
			</label>
			<label className="threequarters">
				<span className="label">Address</span>
				<input
					type="text" name="shipping.address" placeholder="p.e. Via della felicità"
					onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value); }}
				/>
			</label>
			<label className="quarter" >
				<span className="label">CP</span>
				<input
					type="text" name="shipping.cp" placeholder="p.e. 08080"
					onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value); }}
				/>
			</label>
		</div>
	);
};


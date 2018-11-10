import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ShippingInfo = () => {
	return (
		<div className="shipping-info">
			<Info />
			<Shipping />
		</div>
	);
};

const Info = () => {
	return (
		<div className="info form">
			<h4>Personal Info</h4>
			<label className="half">
				<span className="label">Name</span>
				<input type="text" name="name" placeholder="p.e. John" />
			</label>
			<label className="half">
				<span className="label">Surname</span>
				<input type="text" name="surname" placeholder="p.e. Doe" />
			</label>
			<label className="full">
				<span className="label">Mail address</span>
				<input type="text" name="email" placeholder="p.e. john.doe@thedoes.com" />
			</label>
		</div>
	);
};

const Shipping = () => {
	return (
		<div className="shipping form">
			<h4>Shipping info</h4>
			<label className="half">
				<span className="label">Country</span>
				<input type="text" name="country" placeholder="p.e. Italy" />
			</label>
			<label className="half">
				<span className="label">City</span>
				<input type="text" name="city" placeholder="p.e. Rome" />
			</label>
			<label className="threequarters">
				<span className="label">Address</span>
				<input type="text" name="address" placeholder="p.e. Via della felicità" />
			</label>
			<label className="quarter" >
				<span className="label">CP</span>
				<input type="text" name="cp" placeholder="p.e. 08080" />
			</label>
		</div>
	);
};


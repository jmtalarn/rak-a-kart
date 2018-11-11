import React from 'react';

export const PaymentInfo = ({ updateInfoField, info }) => {
	return (
		<div className="payment-info">
			<div className="payment form">
				<h4>PAYMENT</h4>
				<label className="full">
					<span className="label">Name in card</span>
					<input
						type="text" name="payment.name" placeholder="p.e. John Doe" required
						value={info.payment.name}
						onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value); }}
					/>
				</label>
				<label className="full">
					<span className="label">Card number</span>
					<input
						type="text" name="payment.cardnumber" placeholder="p.e. 0000000000000000"
						pattern="[0-9]{16}" required
						value={info.payment.cardnumber} maxLength={16} minLength={16}
						onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value); }}
					/>
				</label>
				<label className="half">
					<span className="label">Expiration date</span>
					<input
						type="month" name="payment.expirationdate"
						required
						value={info.payment.expirationdate}
						onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value); }}
					/>
				</label>
				<label className="half">
					<span className="label">CVV</span>
					<input
						type="text" name="payment.cvv" placeholder="p.e. 123"
						pattern="[0-9]{3}" required
						value={info.payment.cvv} maxLength={3} minLength={3}
						onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value); }}
					/>
				</label>
			</div>
		</div>
	);
};

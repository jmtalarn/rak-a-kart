import React from 'react';

export const ShippingInfo = ({ updateInfoField, searchCity, suggestedCities, info }) => {
	return (
		<div className="shipping-info">
			<Info
				updateInfoField={updateInfoField}
				personalInfo={info.personal}
			/>
			<Shipping
				updateInfoField={updateInfoField}
				searchCity={searchCity}
				shippingInfo={info.shipping}
				suggestedCities={suggestedCities}
			/>
		</div>
	);
};

const Info = ({ updateInfoField, personalInfo }) => {
	return (
		<div className="info form">
			<h4>Personal Info</h4>
			<label className="half">
				<span className="label">Name</span>
				<input
					type="text" name="personal.name" placeholder="p.e. John" required
					value={personalInfo.name}
					onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value); }}
				/>
			</label>
			<label className="half">
				<span className="label">Surname</span>
				<input
					type="text" name="personal.surname" placeholder="p.e. Doe" required
					value={personalInfo.surname}
					onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value); }}
				/>
			</label>
			<label className="full">
				<span className="label">Mail address</span>
				<input
					type="email" name="personal.email" placeholder="p.e. john.doe@thedoes.com"
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required
					value={personalInfo.email}
					onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value); }}
				/>
			</label>
		</div>
	);
};

const Shipping = ({ updateInfoField, searchCity, suggestedCities, shippingInfo }) => {


	return (
		<div className="shipping form">
			<h4>Shipping info</h4>
			<label className="half">
				<span className="label">Country</span>
				<input
					type="text" name="shipping.country" placeholder="p.e. Italy" required
					value={shippingInfo.country}
					onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value.trim()); }}
					list="countries_suggested"
				/>
				<datalist id="countries_suggested">
					<option value="Japan">Japan</option>
					<option value="Spain">Spain</option>
					<option value="France">France</option>
					<option value="United States">United States</option>
					<option value="United Kingdom">United Kingdom</option>
				</datalist>
			</label>
			<label className="half">
				<span className="label">City</span>
				<input
					type="text" name="shipping.city" placeholder="p.e. Rome" required
					value={shippingInfo.city}
					onChange={(evt) => {
						searchCity(evt.target.value.trim());
					}}
					onInput={(evt) => {
						const [ city, , country ] = evt.target.value.split(",");
						if (Boolean(country)) { updateInfoField("shipping.country", country.trim()); }
						if (Boolean(city)) { updateInfoField("shipping.city", city.trim()); }
					}}
					list="cities_suggested"
				/>
				<datalist id="cities_suggested">
					{suggestedCities ?
						suggestedCities.map(suggestedCity => (
							<option value={suggestedCity}>
								{suggestedCity}
							</option>))
						: null
					}
				</datalist>


			</label>
			<label className="threequarters">
				<span className="label">Address</span>
				<input
					type="text" name="shipping.address" placeholder="p.e. Via della felicità" required
					value={shippingInfo.address}
					onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value.trim()); }}
				/>
			</label>
			<label className="quarter" >
				<span className="label">CP</span>
				<input
					type="text" name="shipping.cp" placeholder="p.e. 08080" required
					value={shippingInfo.cp}
					onChange={(evt) => { updateInfoField(evt.target.name, evt.target.value.trim()); }}
				/>
			</label>
		</div>
	);
};


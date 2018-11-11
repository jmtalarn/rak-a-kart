import * as ACTION from './types';
import products from '../../data/products.json';
import shipping from '../../data/shipping.json';

import fetchJsonp from 'fetch-jsonp';

export function toggleCart() {
	return {
		type: ACTION.TOGGLE_CART
	};

}

export function searchCity(text) {
	return dispatch => {

		if (text.length >= 3) {
			return fetchJsonp(`http://gd.geobytes.com/AutoCompleteCity?q=${text}`)
				.then((response) => response.json())
				.then(function (json) {
					return dispatch({
						type: ACTION.SET_SUGGESTED_CITIES,
						suggestedCities: json,
					});
				});
		}
	};
}
export function addProduct(id, selectedOptions) {

	return dispatch => {
		let product = Object.assign({}, products.find(product => product.id === id));
		const options = {};
		for (let [ key, value ] of Object.entries(selectedOptions)) {
			options[ key ] = value;
		}
		product = Object.assign({}, product, { options });
		dispatch({
			type: ACTION.ADD_PRODUCT,
			product,
		}
		);
	};
}
export function removeProduct(index) {

	return {
		type: ACTION.REMOVE_PRODUCT,
		index,
	};

};
export function updateInfoField(name, value) {
	return dispatch => {
		dispatch(
			{
				type: ACTION.UPDATE_INFO_FIELD,
				name,
				value,
			});
		console.log(name, value, "UPDATING SHIPPING COST");
		if (name === 'shipping.country') {

			dispatch({
				type: ACTION.UPDATE_SHIPPING_COST,
				shippingCost: shipping[ value.toUpperCase() ],
			});
		}

	};
}

export function sendPayment(cart) {
	return dispatch => {
		console.log("SEND PAYMENT");
		return fetch(`/api/payment/`,
			{
				method: 'POST',
				headers: {
					"Content-Type": "application/json; charset=utf-8",
				},
				body: JSON.stringify(cart)
			})
			.then((response) => response.json())
			.then((json) => {
				dispatch({
					type: ACTION.THANK_YOU,
					response: json,
				});
				setTimeout(
					() => dispatch({  
						type: ACTION.RESET,
					})
					, 5000
				);
			});
	};
};


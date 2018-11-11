import * as ACTION from './types';
import products from '../../data/products.json';
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
export function removeProduct(id) {

	return {
		type: ACTION.REMOVE_PRODUCT,
		id,
	};

};
export function updateInfoField(name, value) {
	return {
		type: ACTION.UPDATE_INFO_FIELD,
		name, value,
	};
}


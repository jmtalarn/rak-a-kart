import * as ACTION from './types';
import products from '../../data/products.json';

export function toggleCart() {
	return {
		type: ACTION.TOGGLE_CART
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


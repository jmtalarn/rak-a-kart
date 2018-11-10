import * as ACTION from './types';
import products from '../../data/products.json';

export function toggleCart() {
	return {
		type: ACTION.TOGGLE_CART
	};

}

export function addProduct(id, selectedOptions) {

	return dispatch => {
		const product = products.find(product => product.id === id);
		for (let [ key, value ] of Object.entries(selectedOptions)) {
			product.options[ key ] = value;
		}
		dispatch({
			type: ACTION.ADD_PRODUCT,
			product,
		}
		);
	};


}

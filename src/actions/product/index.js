import * as ACTION from './types';
import products from '../../data/products.json';

export function selectProduct(id) {
	return dispatch => {
		const product = products.find(product => product.id === id);
		dispatch(
			{
				type: ACTION.SELECT_PRODUCT,
				product,
			}
		);
	};
}

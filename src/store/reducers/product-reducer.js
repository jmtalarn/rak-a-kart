import * as ActionTypes from '../../actions/product/types';

const initialState = {
	info: {},
	selectedOptions: {}
};

function productReducer(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.SELECT_PRODUCT:
			const selectedOptions = {};
			for (const key of Object.keys(action.product.options)) {
				if (action.product.options[ key ] && Array.isArray(action.product.options[ key ])) {
					selectedOptions[ key ] = action.product.options[ key ][ 0 ];
				}
			}
			return Object.assign(
				{},
				state,
				{ info: action.product },
				{ selectedOptions }
			);
		case ActionTypes.SELECT_OPTION:
			return Object.assign(
				{},
				state,
				{
					selectedOptions: Object.assign({}, state.selectedOptions, { [ action.key ]: action.item })
				}
			);
		default:
			return state;
	}
}

export default productReducer;


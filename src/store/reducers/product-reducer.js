import * as ActionTypes from '../../actions/product/types';

const initialState = {
	info: {}
};

function productReducer(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.SELECT_PRODUCT:
			return Object.assign({}, state, { info: action.product });
		default:
			return state;
	}
}

export default productReducer;


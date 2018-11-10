import * as ActionTypes from '../../actions/cart/types';

const initialState = {
	open: false,
	items: []
};

function cartReducer(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.TOGGLE_CART:
			return Object.assign(
				{},
				state,
				{ open: !state.open }
			);
		case ActionTypes.ADD_PRODUCT:
			return Object.assign(
				{},
				state,
				{ items: [ ...state.items, action.product ] }
			);
		default:
			return state;
	}
}

export default cartReducer;


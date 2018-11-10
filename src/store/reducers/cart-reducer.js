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
		case ActionTypes.REMOVE_PRODUCT:
			return Object.assign(
				{},
				state,
				{ items: state.items.filter(item => item.id !== action.id) }
			);
		default:
			return state;
	}
}

export default cartReducer;


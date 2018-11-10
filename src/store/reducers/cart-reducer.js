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

		default:
			return state;
	}
}

export default cartReducer;


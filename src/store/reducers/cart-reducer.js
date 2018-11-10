import * as ActionTypes from '../../actions/cart/types';

const initialState = {
	opened: false,
	items: []
};

function cartReducer(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.TOGGLE_CART:
			return Object.assign(
				{},
				state,
				{ opened: !state.opened }
			);

		default:
			return state;
	}
}

export default productReducer;


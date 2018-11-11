import * as ActionTypes from '../../actions/cart/types';

const initialState = {
	open: false,
	info: {
		personal: {
			name: '',
			surname: '',
			email: ''
		},
		shipping: {
			country: '',
			city: '',
			address: '',
			cp: ''
		}
	},
	suggestedCities: [],
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
		case ActionTypes.UPDATE_INFO_FIELD:

			const [ block, property ] = action.name.split(".");
			const info = Object.assign(
				{},
				state.info,
				{
					[ block ]: Object.assign(
						{},
						state.info[ block ],
						{ [ property ]: action.value }
					)
				}
			);

			return Object.assign(
				{},
				state,
				{ info }
			);
		case ActionTypes.SET_SUGGESTED_CITIES:
			return Object.assign(
				{},
				state,
				{ suggestedCities: action.suggestedCities }
			);
		default:
			return state;
	}
}

export default cartReducer;


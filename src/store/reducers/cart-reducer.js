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
		},
		payment: {
			name: '',
			cardnumber: '',
			expirationdate: '',
			cvv: ''
		}
	},
	thankyou: {},
	shippingCost: {},
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
				{ items: [ ...state.items.slice(0, action.index), ...state.items.slice(action.index + 1) ] }
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
		case ActionTypes.UPDATE_SHIPPING_COST:
			return Object.assign(
				{},
				state,
				{ shippingCost: action.shippingCost }
			);
		case ActionTypes.SET_SUGGESTED_CITIES:
			return Object.assign(
				{},
				state,
				{ suggestedCities: action.suggestedCities }
			);
		case ActionTypes.THANK_YOU:
			return Object.assign(
				{},
				state,
				{ thankyou: action.response });
		case ActionTypes.RESET:
			return initialState;
		default:
			return state;
	}
}

export default cartReducer;


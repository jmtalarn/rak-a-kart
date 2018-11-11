import Cart from './cart';
import { connect } from 'react-redux';
import { removeProduct, updateInfoField, searchCity } from '../../actions/cart';

const CartState = function (state, props) {
	const { cart: { items, suggestedCities, info, shippingCost } } = state;
	console.log(state);
	return {
		items,
		info,
		shippingCost,
		suggestedCities,
	};
};

const CartDispatch = function (dispatch) {
	return {
		removeProduct: (id) => {
			dispatch(removeProduct(id));
		},
		updateInfoField: (name, value) => {
			dispatch(updateInfoField(name, value));
		},
		searchCity: (text) => {
			dispatch(searchCity(text));
		}
	};
};
var CartContainer = connect(
	CartState,
	CartDispatch
)(Cart);

export default CartContainer;

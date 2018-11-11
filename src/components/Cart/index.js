import Cart from './cart';
import { connect } from 'react-redux';
import { removeProduct, updateInfoField, searchCity, sendPayment } from '../../actions/cart';

const CartState = function (state, props) {
	const { cart: { items, suggestedCities, info, shippingCost, thankyou } } = state;
	console.log(state);
	return {
		items,
		info,
		shippingCost,
		suggestedCities,
		thankyou,
	};
};

const CartDispatch = function (dispatch) {
	return {
		removeProduct: (index) => {
			dispatch(removeProduct(index));
		},
		updateInfoField: (name, value) => {
			dispatch(updateInfoField(name, value));
		},
		searchCity: (text) => {
			dispatch(searchCity(text));
		},
		sendPayment: (cart) => {
			dispatch(sendPayment(cart));
		}
	};
};
var CartContainer = connect(
	CartState,
	CartDispatch
)(Cart);

export default CartContainer;

import Cart from './cart';
import { connect } from 'react-redux';


const CartState = function (state, props) {
	const { cart: { items } } = state;

	return {
		items
	};
};

const CartDispatch = function (dispatch) {
	return {};
};
var CartContainer = connect(
	CartState,
	CartDispatch
)(Cart);

export default CartContainer;

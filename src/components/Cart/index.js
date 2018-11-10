import Cart from './cart';
import { connect } from 'react-redux';
import { removeProduct } from '../../actions/cart';

const CartState = function (state, props) {
	const { cart: { items } } = state;

	return {
		items
	};
};

const CartDispatch = function (dispatch) {
	return {
		removeProduct: (id) => {
			dispatch(removeProduct(id));
		}
	};
};
var CartContainer = connect(
	CartState,
	CartDispatch
)(Cart);

export default CartContainer;

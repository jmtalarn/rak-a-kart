import Cart from './cart';
import { connect } from 'react-redux';
import { removeProduct, updateInfoField } from '../../actions/cart';

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
		},
		updateInfoField: (name, value) => {
			dispatch(updateInfoField(name, value));
		}
	};
};
var CartContainer = connect(
	CartState,
	CartDispatch
)(Cart);

export default CartContainer;

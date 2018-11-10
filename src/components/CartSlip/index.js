import CartSlip from './cart-slip';
import { toggleCart } from '../../actions/cart';
import { connect } from 'react-redux';


const CartSlipState = function (state, props) {
	const { cart: { open }
	} = state;

	return {
		open
	};
};

const CartSlipDispatch = function (dispatch) {
	return {
		toggleCart: () => {
			dispatch(toggleCart());
		}
	};
};
var CartSlipContainer = connect(
	CartSlipState,
	CartSlipDispatch
)(CartSlip);

export default CartSlipContainer;

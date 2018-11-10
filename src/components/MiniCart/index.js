import MiniCart from './mini-cart';
import { toggleCart } from '../../actions/cart';
import { connect } from 'react-redux';


const MiniCartState = function (state, props) {
	const { cart: { items }
	} = state;
	return {
		size: items.length
	};
};

const MiniCartDispatch = function (dispatch) {
	return {
		toggleCart: () => {
			dispatch(toggleCart());
		}
	};
};
var MiniCartContainer = connect(
	MiniCartState,
	MiniCartDispatch
)(MiniCart);

export default MiniCartContainer;

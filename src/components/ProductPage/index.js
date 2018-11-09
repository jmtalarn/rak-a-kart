import ProductPage from './product-page';
import { connect } from 'react-redux';
import { selectOption } from '../../actions/product';

const ProductPageState = function (state, props) {
	const { product } = state;

	return {
		product
	};
};

const ProductPageDispatch = function (dispatch) {
	return {
		selectOption: (key, item) => {
			dispatch(selectOption(key, item));
		}
	};
};

var ProductPageContainer = connect(
	ProductPageState,
	ProductPageDispatch
)(ProductPage);

export default ProductPageContainer;

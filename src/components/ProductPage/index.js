import ProductPage from './product-page';
import { connect } from 'react-redux';
import { selectOption } from '../../actions/product';
import { addProduct } from '../../actions/cart';

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
		},
		addProduct: (id, selectedOptions) => {
			dispatch(addProduct(id, selectedOptions));
		}

	};
};

var ProductPageContainer = connect(
	ProductPageState,
	ProductPageDispatch
)(ProductPage);

export default ProductPageContainer;

import ProductPage from './product-page';
import { connect } from 'react-redux';

const ProductPageState = function (state, props) {
	const { product } = state;

	return {
		product
	};
};

const ProductPageDispatch = null;

var ProductPageContainer = connect(
	ProductPageState,
	ProductPageDispatch
)(ProductPage);

export default ProductPageContainer;

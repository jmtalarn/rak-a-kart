import Search from './search';
import { selectProduct } from '../../actions/product';
import { connect } from 'react-redux';
import products from '../../data/products.json';

const SearchState = function (state, props) {
	return {
		products
	};
};

const SearchDispatch = function (dispatch) {
	return {
		selectProduct: (id) => {
			dispatch(selectProduct(id));
		}
	};
};
var SearchContainer = connect(
	SearchState,
	SearchDispatch
)(Search);

export default SearchContainer;

import React, { Component } from 'react';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';*/
import { CartSummary } from './cart-components';
import './cart.css';

export default class Cart extends Component {
	constructor(props) {
		super(props);
		this.removeProduct = this.removeProduct.bind(this);
	}
	removeProduct(id) {
		const { removeProduct } = this.props;
		removeProduct(id);
	}
	render() {
		const { items } = this.props;
		console.log('Cart ->', items);
		return (
			<div class="cart">
				<h2>Your order </h2>
				<hr />
				<CartSummary
					items={items}
					removeProduct={this.removeProduct}
				/>
			</div>
		);
	}
}

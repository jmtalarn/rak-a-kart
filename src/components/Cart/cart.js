import React, { Component } from 'react';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';*/
import { CartSummary } from './cart-components';
import './cart.css';

export default class Cart extends Component {
	render() {
		const { items } = this.props;
		console.log('Cart ->', items);
		return (
			<div class="cart">
				<h2>Your order </h2>
				<hr />
				<CartSummary items={items} />
			</div>
		);
	}
}

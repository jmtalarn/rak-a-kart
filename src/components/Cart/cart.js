import React, { Component } from 'react';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';*/
import { CartSummary, ShippingCosts, TotalPrice } from './cart-components';
import Tabs from '../Tabs';
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

		const summary = <CartSummary
			items={items}
			removeProduct={this.removeProduct}
		/>;
		return (
			<div className="cart">
				<h2>Your order </h2>
				<hr />
				<Tabs
					summary={summary}
					info={null}
					payment={null}
				/>
				<hr />
				<ShippingCosts />
				<hr />
				<TotalPrice items={items} />
				<hr />
			</div>
		);
	}
}

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './mini-cart.css';



export default class MiniCart extends Component {
	constructor(props) {
		super(props);

		this.toggleCart = this.toggleCart.bind(this);
	}

	toggleCart() {
		const { toggleCart } = this.props;
		toggleCart();
	}

	render() {
		const { size } = this.props;

		return (
			<div
				tabIndex={0}
				className="mini-cart"
				onClick={this.toggleCart}
			>
				<FontAwesomeIcon icon="shopping-cart" />
				<span className="shopping-cart-count">
					{size ? (`${size} items`) : null}
				</span>
			</div>
		);
	}
}

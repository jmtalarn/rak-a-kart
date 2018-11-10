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
				className="mini-cart"
			>
				<button
					onClick={this.toggleCart}
				>
					<FontAwesomeIcon icon="shopping-cart" />
					<span className="shopping-cart-count">
						&nbsp;
						{size ? (`${size} items`) : null}
					</span>
				</button>
			</div >
		);
	}
}

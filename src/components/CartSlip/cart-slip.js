import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cart-slip.css';



export default class CartSlip extends Component {
	constructor(props) {
		super(props);

		this.toggleCart = this.toggleCart.bind(this);
	}

	toggleCart() {
		const { toggleCart } = this.props;
		toggleCart();
	}
	render() {
		const { open } = this.props;
		console.log('open', this.props);
		return (
			<div className={`cart-slip${open ? ' open' : ''}`}>
				<FontAwesomeIcon
					tabIndex={0}
					onClick={this.toggleCart}
					className="close-icon"
					icon="times"
					size="4x"
				/>
				<div className='cart-slip-content'>
					<h1>Cart</h1>
					<p>Here will appear your cart content ready to checkout</p>
				</div>
			</div>
		);
	}
}

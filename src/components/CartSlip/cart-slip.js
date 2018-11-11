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
		const { open, children } = this.props;

		return (
			<div className={`cart-slip${open ? ' open' : ''}`}>
				<button
					className="close-icon"
					onClick={this.toggleCart}
				>
					<FontAwesomeIcon
						icon="times"
						size="4x"
					/>
				</button>
				<div className='cart-slip-content'>
					{children}
				</div>

			</div>
		);
	}
}

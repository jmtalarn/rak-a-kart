import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartSummaryProduct = ({ item, removeProduct }) => {
	return (
		<div className="summary-product-wrapper">
			<div className="summary-product-delete-overlay">
				<button
					onClick={() => { removeProduct(item.id); }}
				>
					<FontAwesomeIcon icon="trash-alt" />
				</button>
			</div>
			<div className="summary-product">
				<img className="summary-product-image" src={item.image} alt={`small miniature of a fancy product`} />
				<h3 className="summary-product-title">
					{item.name}
				</h3>
				<div className="summary-product-options">
					{
						Object.entries(item.options).map(
							([ key, value ], idx) => (
								<div
									className="summary-product-option"
									key={idx}
								>
									<div className="summary-product-option-key">{key}</div>
									<div className="summary-product-option-value">{value}</div>
								</div>
							)
						)
					}
				</div>
				<div className="summary-product-price">
					{item.price} €
			</div>
			</div>
		</div >
	);
};

export const CartSummary = ({ items, removeProduct }) => {

	return (
		<div className="cart-summary">
			{items.map((item, idx) =>
				<CartSummaryProduct
					key={idx}
					item={item}
					removeProduct={removeProduct}
				/>
			)}
		</div>

	);
};

export const ShippingCosts = () => {

	return (
		<div className="shipping-costs">
			<div className="label">Shipping cost</div>
			<div className="value">0 €</div>
		</div>

	);
};


export const TotalPrice = ({ items }) => {
	let value = 0;
	for (let i = 0; i < items.length; i++) {
		value += parseFloat(items[ i ].price);
	}
	value = value.toFixed(2);

	return (
		<div className="total-price">
			<div className="label">Total cost</div>
			<div className="value">{value} €</div>
		</div>

	);
};

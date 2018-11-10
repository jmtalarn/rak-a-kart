import React, { Component } from 'react';

const CartSummaryProduct = ({ item }) => {
	return (
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
		</div >
	);
};

export const CartSummary = ({ items }) => {

	return (
		<div className="cart-summary">
			{items.map((item, idx) =>
				<CartSummaryProduct
					key={idx}
					item={item}
				/>
			)}
			<hr />
		</div>

	);
};

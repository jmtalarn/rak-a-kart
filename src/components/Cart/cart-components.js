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
			<hr />
		</div>

	);
};

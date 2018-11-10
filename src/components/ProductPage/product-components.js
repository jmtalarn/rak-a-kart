import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const PriceBox = ({ value }) => {
	return (
		<div className="price-box">
			<div className="price-box-value">
				<h2>{value} €</h2>
				<small>incl. VAT</small>
			</div>
			<ul className="price-box-advantages">
				<li>
					<FontAwesomeIcon icon="truck" /> Check shipping fees on the checkout step
				</li>
				<li>
					<FontAwesomeIcon icon="clock" /> Delivery only in few days
				</li>
				<li>
					<FontAwesomeIcon icon="retweet" /> Free returns
				</li>
			</ul>
			<div className="price-box-superpoints">
				<div className="price-box-superpoints-count">
					<FontAwesomeIcon className="icon" icon={[ "fab", "product-hunt" ]} />
					{(parseFloat(value) * 2).toFixed(2)} Super Points
				</div>
				<div className="price-box-superpoints-promo">Double Super Points this month</div>
			</div>
			<div className="price-box-actions">
				<button className="price-box-buynow">Buy now</button>
				<button className="price-box-addtocart">Add to cart</button>
			</div>
		</div>
	);
};


export const Option = ({ children, selected, onClick }) => {
	return (
		<div
			className={`option${selected ? ' selected' : ''}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
};
export const Stars = ({ value }) => {
	const stars = [];
	for (let i = 0; i < 5; i++) {

		if (i < value) {
			stars.push(<FontAwesomeIcon key={i} icon={[ "fas", "star" ]} />);
		} else {
			stars.push(<FontAwesomeIcon key={i} icon={[ "far", "star" ]} />);
		}
	}
	return <div className="stars">{stars}</div>;
};
export const Reviews = ({ value }) => {
	return (
		<div className="reviews">
			({`${value} reviews`})
		</div>
	);
};

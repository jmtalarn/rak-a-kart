import React, { Component } from 'react';
import { capitalize } from '../../utils/StringUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './product-page.css';


const Option = ({ children }) => {
	return <div className="option">{children}</div>;
};
const Stars = ({ value }) => {
	const stars = [];
	for (let i = 0; i < 5; i++) {

		if (i < value) {
			console.log(i, value, "solid");
			stars.push(<FontAwesomeIcon key={i} icon={[ "fas", "star" ]} />);
		} else {
			console.log(i, value, "regular");
			stars.push(<FontAwesomeIcon key={i} icon={[ "far", "star" ]} />);
		}
	}
	return <div className="stars">{stars}</div>;
};
const Reviews = ({ value }) => {
	return (
		<div className="reviews">
			{`${value} reviews`}
		</div>
	);
};
export default class ProductPage extends Component {
	renderOptions() {
		const { product: { options } } = this.props;
		return Object.keys(options).map((key, idx) =>
			(
				<ul key={idx}>
					{capitalize(key)}
					{options[ key ].map((item, idx) => <Option key={idx}>{item}</Option>)}
				</ul>
			)
		);

	}
	render() {
		const { product } = this.props;
		return (
			<main>
				<img src={product.image} alt={`A visual represetation of the product ${product.name}`} />
				<h2>{product.name}</h2>
				<Stars value={product.stars} />
				<Reviews value={product.reviews} />
				{this.renderOptions()}
				<p>{product.description}</p>
			</main>
		);
	}
}


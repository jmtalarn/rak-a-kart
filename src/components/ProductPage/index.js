import React, { Component } from 'react';
import { capitalize } from '../../utils/StringUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './product-page.css';

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
export default class ProductPage extends Component {
	renderOptions() {
		const { product: { options } } = this.props;
		return Object.keys(options).map((key, idx) =>
			(
				<ul key={idx}>
					{capitalize(key)}
					{options[ key ].map((item, idx) => <span key={idx}>{item}</span>)}
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
				<p>{product.reviews}</p>
				{this.renderOptions()}
				<p>{product.description}</p>
			</main>
		);
	}
}

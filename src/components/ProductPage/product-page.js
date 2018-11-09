import React, { Component } from 'react';
import { capitalize } from '../../utils/StringUtils';
import { isObjectEmpty } from '../../utils/ObjectUtils';
import { Option, Stars, Reviews } from './product-components';
import './product-page.css';



export default class ProductPage extends Component {
	constructor(props) {
		super(props);
		this.selectOption = this.selectOption.bind(this);
	}
	selectOption(key, item) {
		const { selectOption } = this.props;
		selectOption(key, item);
	}
	renderOptions() {
		const { product: { info: { options = {} }, selectedOptions = {} } } = this.props;

		return Object.keys(options).map((key, idx) =>
			(
				<div key={idx}>
					{capitalize(key)}
					{options[ key ].map((item, idx) =>
						(
							<Option
								key={idx}
								selected={selectedOptions[ key ] === item}
								onClick={this.selectOption.bind(this, key, item)}
							>
								{item}
							</Option>
						)
					)}
				</div>
			)
		);

	}
	renderProduct() {
		const { product: { info } } = this.props;
		console.log(this.props);
		return !isObjectEmpty(info) ?
			(
				<article>
					<img src={info.image} alt={`A visual represetation of the product ${info.name}`} />
					<h2>{info.name}</h2>
					<div className="product-reviews">
						<Stars value={info.stars} />
						<Reviews value={info.reviews} />
					</div>
					{this.renderOptions()}
					<p>{info.description}</p>
				</article>
			)
			: null;
	}
	render() {

		return (
			<main>
				{this.renderProduct()}
			</main>
		);
	}
}


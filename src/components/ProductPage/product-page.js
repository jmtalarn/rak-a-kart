import React, { Component } from 'react';
import { capitalize } from '../../utils/StringUtils';
import { isObjectEmpty } from '../../utils/ObjectUtils';
import { Option, Stars, Reviews, PriceBox } from './product-components';
import './product-page.css';



export default class ProductPage extends Component {
	constructor(props) {
		super(props);
		this.selectOption = this.selectOption.bind(this);
		this.addToCart = this.addToCart.bind(this);
	}
	selectOption(key, item) {
		const { selectOption } = this.props;
		selectOption(key, item);
	}
	addToCart() {
		const { product: { info: { id }, selectedOptions = {} }, addProduct } = this.props;
		addProduct(id, selectedOptions);
	}
	renderOptions() {
		const { product: { info: { options }, selectedOptions = {} } } = this.props;
		return (
			<div className="product-options">
				{Object.keys(options).map((key, idx) =>
					(
						<div key={idx} >
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
				)}
			</div>
		);

	}
	renderProduct() {
		const { product: { info } } = this.props;

		return !isObjectEmpty(info) ?
			(
				<article>
					<div className="product-image">
						<img src={info.image} alt={`A visual represetation of the product ${info.name}`} />
					</div>

					<h2
						className="product-info-title"
					>{info.name}</h2>
					<div className="product-reviews">
						<Stars value={info.stars} />
						<Reviews value={info.reviews} />
					</div>
					{this.renderOptions()}
					<p className="product-description">
						{info.description}
					</p>

					<PriceBox value={info.price} addToCart={this.addToCart} />

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


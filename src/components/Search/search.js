import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './search.css';
import Select from 'react-select';


export default class Search extends Component {
	constructor(props) {
		super(props);

		this.selectProduct = this.selectProduct.bind(this);
	}

	selectProduct(selectedOption) {
		const { selectProduct } = this.props;
		selectProduct(selectedOption.value);
	}

	render() {
		const { products } = this.props;
		const options = products.map(product => (
			{
				value: product.id,
				label: `${product.name} - ${[ ...product.description.split(" ").slice(0, 8), "..." ].join(" ")}`
			})
		);
		return (
			<div className="search">
				<FontAwesomeIcon className="search-icon" icon="search" />
				<Select
					className="search-input"
					placeholder="Search for some car brands to find our awesome products..."
					onChange={this.selectProduct}
					options={options}
				/>
			</div>
		);
	}
}

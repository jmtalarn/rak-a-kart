import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../logo.png';
import './header.css';
import Select from 'react-select';
import products from '../../data/products.json';

export default class Header extends Component {
	render() {
		const options = products.map(product => (
			{
				value: product.id,
				label: `${product.name} - ${[ ...product.description.split(" ").slice(0, 8), "..." ].join(" ")}`
			})
		);
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div className="search">
					<FontAwesomeIcon className="search-icon" icon="search" />
					<Select
						className="search-input"
						placeholder="Search for some car brands to find our awesome products..."
						options={options}
					/>
				</div>
				<div className="minicart">
					<FontAwesomeIcon icon="shopping-cart" />
				</div>


			</header>
		);
	}
}


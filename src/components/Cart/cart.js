import React, { Component } from 'react';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';*/
import { CartSummary, ShippingCosts, TotalPrice } from './cart-components';
import { ShippingInfo } from './info-components';
import Tabs from '../Tabs';
import './cart.css';

export default class Cart extends Component {
	constructor(props) {
		super(props);
		this.removeProduct = this.removeProduct.bind(this);
		this.updateInfoField = this.updateInfoField.bind(this);

	}
	removeProduct(id) {
		const { removeProduct } = this.props;
		removeProduct(id);
	}
	updateInfoField(name, value) {
		const { updateInfoField } = this.props;
		updateInfoField(name, value);
	}
	render() {
		const { items, suggestedCities, searchCity, info, shippingCost } = this.props;
	
		const summaryComponent = <CartSummary
			items={items}
			removeProduct={this.removeProduct}
		/>;
		const infoComponent = <ShippingInfo
			updateInfoField={this.updateInfoField}
			searchCity={searchCity}
			info={info}
			suggestedCities={suggestedCities}
		/>;
		return (
			<div className="cart">
				<h2>Your order </h2>
				<hr />
				<Tabs
					summary={summaryComponent}
					info={infoComponent}
					payment={null}
				/>
				<hr />
				<ShippingCosts shippingCost={shippingCost} />
				<hr />
				<TotalPrice items={items} shippingCost={shippingCost} />
				<hr />
			</div>
		);
	}
}

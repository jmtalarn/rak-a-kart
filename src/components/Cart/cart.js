import React, { Component } from 'react';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';*/
import { CartSummary, ShippingCosts, TotalPrice } from './cart-components';
import { ShippingInfo } from './info-components';
import { PaymentInfo } from './payment-components';
import { isObjectEmpty } from '../../utils/ObjectUtils';
import Tabs from '../Tabs';
import './cart.css';

export default class Cart extends Component {
	constructor(props) {
		super(props);
		this.removeProduct = this.removeProduct.bind(this);
		this.updateInfoField = this.updateInfoField.bind(this);
		this.sendPayment = this.sendPayment.bind(this);
	}
	removeProduct(index) {
		const { removeProduct } = this.props;
		removeProduct(index);
	}
	updateInfoField(name, value) {
		const { updateInfoField } = this.props;
		updateInfoField(name, value);
	}
	sendPayment() {
		const { sendPayment, items, info } = this.props;
		sendPayment({ items, info });
	}
	renderThankYou() {
		const {
			thankyou
		} = this.props;
		return (
			<div className="thankyou">
				<h3>{thankyou.message}</h3>
				<p>{thankyou.charged}</p>
			</div>
		);
	}
	renderComponents() {
		const {
			items,
			suggestedCities,
			searchCity,
			info,
			shippingCost,
		} = this.props;
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
		const paymentComponent = <PaymentInfo
			updateInfoField={this.updateInfoField}
			info={info}
		/>;
		return [
			<Tabs
				key="tabs"
				summary={summaryComponent}
				info={infoComponent}
				payment={paymentComponent}
				finalStep={this.sendPayment}
			/>,
			<hr
				key="line-1"
			/>,
			<ShippingCosts
				key="shippingcosts"
				shippingCost={shippingCost}
			/>,
			<hr
				key="line-2"
			/>,
			<TotalPrice
				key="totalprice"
				items={items}
				shippingCost={shippingCost}
			/>,
			<hr
				key="line-3"
			/>
		];
	}
	render() {
		const {
			thankyou
		} = this.props;
		console.log('Thank you', isObjectEmpty(thankyou), thankyou);
		return (
			<div className="cart">
				<h2>Your order </h2>
				<hr />
				{
					(isObjectEmpty(thankyou)) ?
						this.renderComponents() :
						this.renderThankYou()
				}

			</div>
		);
	}
}

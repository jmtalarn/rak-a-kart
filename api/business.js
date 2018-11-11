const products = require('../src/data/products.json');
const shippingCosts = require('../src/data/shipping.json');

/*As we don't trust what comes form frontend we recalculate with our internal data */
function calculateTotal(items, country) {
	let value = 0;
	for (let i = 0; i < items.length; i++) {
		const product = products.find(item => item.id === items[ i ].id);
		value += parseFloat(product.price);
	}
	const shippingCost = shippingCosts[ country.toUpperCase() ];
	if (Boolean(shippingCost)) {
		if (shippingCost.currency === '€') {
			value += shippingCost.shipping;
		} else if (shippingCost.currency === '£') {
			value += (shippingCost.shipping * 1.15);
		}
	}

	value = value.toFixed(2);
	return value;
}

module.exports = {
	calculateTotal
};

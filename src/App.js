import React, { Component } from 'react';
import './utils/FontAwesome.init';
import './App.css';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import CartSlip from './components/CartSlip';
import Cart from './components/Cart';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<ProductPage />
				<CartSlip>
					<Cart />
				</CartSlip>
			</div>
		);
	}
}

export default App;

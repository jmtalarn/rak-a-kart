import React, { Component } from 'react';
import './utils/FontAwesome.init';
import './App.css';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import CartSlip from './components/CartSlip';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<ProductPage />
				<CartSlip />
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import logo from '../../logo.png';
import './header.css';

export default class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">
					Rak-a-cart
				</h1>
			</header>
		);
	}
}


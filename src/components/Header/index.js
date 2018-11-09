import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../logo.png';
import './header.css';

export default class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div className="search">
					<FontAwesomeIcon className="search-icon" icon="search" />
					<input className="search-input" type="text" placeholder="Search for some car brands to find our awesome products..." />
				</div>
				<div className="minicart">
					<FontAwesomeIcon icon="shopping-cart" />
				</div>


			</header>
		);
	}
}


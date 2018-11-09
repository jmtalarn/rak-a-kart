import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../logo.png';
import './header.css';
import Search from '../Search';


export default class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Search />
				<div className="minicart">
					<FontAwesomeIcon icon="shopping-cart" />
				</div>


			</header>
		);
	}
}


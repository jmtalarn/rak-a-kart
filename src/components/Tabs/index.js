import React, { Component } from 'react';
import './tabs.css'
	;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class Tabs extends Component {
	constructor(props) {
		super(props);
		this.state = { selected: 0 };
		this.changeTab = this.changeTab.bind(this);
	}

	changeTab(tab) {
		this.setState({ selected: tab });
	}
	renderStepper() {
		const prevButton = this.state.selected > 0 ?
			<button
				className="step prev-step"
				onClick={() => {
					if (this.state.selected > 0) {
						this.changeTab(this.state.selected - 1);
					}
				}}
			>
				<FontAwesomeIcon icon="chevron-left" />
			</button>
			: null;

		return (
			<div className="stepper">
				{prevButton}
				<button
					className="step next-step"
					onClick={() => {
						if (this.state.selected < 2) {
							this.changeTab(this.state.selected + 1);
						}
						else {
							alert('Submit payment');
						}
					}}
				>
					Next step
					</button>
			</div>
		);

	}
	renderSelectTabButton(index) {
		return (
			<button
				className={`tab-button${this.state.selected === index ? ' selected' : ''}`}
				onClick={() => { this.changeTab(index); }}
			>
				{index}
			</button>);
	}
	render() {
		const { summary, info, payment } = this.props;

		return (
			<div className="tabs">
				<div className="select-tab">
					{this.renderSelectTabButton(0)}
					{this.renderSelectTabButton(1)}
					{this.renderSelectTabButton(2)}
				</div>
				<div className="tab-names">
					<div className={`tab-name${this.state.selected === 0 ? ' selected' : ''}`}>Summary</div>
					<div className={`tab-name${this.state.selected === 1 ? ' selected' : ''}`}>Info</div>
					<div className={`tab-name${this.state.selected === 2 ? ' selected' : ''}`}>Payment</div>
				</div>
				<div className="tab-content">

					<div className={`tab-content-item${this.state.selected === 0 ? ' selected' : ''}`}>
						{summary}
					</div>

					<div className={`tab-content-item${this.state.selected === 1 ? ' selected' : ''}`}>
						{info}
					</div>

					<div className={`tab-content-item${this.state.selected === 2 ? ' selected' : ''}`}>
						{payment}
					</div>

				</div>
				{this.renderStepper()}
			</div>
		);
	}

}

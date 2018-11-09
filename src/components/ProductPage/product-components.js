import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Option = ({ children }) => {
	return <div className="option">{children}</div>;
};
export const Stars = ({ value }) => {
	const stars = [];
	for (let i = 0; i < 5; i++) {

		if (i < value) {
			stars.push(<FontAwesomeIcon key={i} icon={[ "fas", "star" ]} />);
		} else {
			stars.push(<FontAwesomeIcon key={i} icon={[ "far", "star" ]} />);
		}
	}
	return <div className="stars">{stars}</div>;
};
export const Reviews = ({ value }) => {
	return (
		<div className="reviews">
			({`${value} reviews`})
		</div>
	);
};

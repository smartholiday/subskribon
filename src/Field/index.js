import React from 'react';
import './Field.css';

export default props =>
	<div className="Field">
		<div className="Field-label">{props.label}</div>
		{props.children}
	</div>
